import React, { useEffect, useState } from "react";
import {
  RiArrowLeftLine,
  RiCalendarEventLine,
  RiCheckLine,
  RiEditLine,
  RiGlobalLine,
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiStickyNoteLine,
  RiUser3Line,
} from "@remixicon/react";
import { useNavigate, useParams } from "react-router-dom";
import { useLead } from "../hooks/uselead";

const formatDate = (value) => {
  if (!value) return "Not available";
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? "Not available"
    : date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
};

const LeadId = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { featchlead } = useLead();
  const [lead, setLead] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const loadLead = async () => {
      setLoading(true);
      setError("");
      try {
        const result = await featchlead(id);
        if (active) setLead(result);
      } catch (requestError) {
        if (active) {
          setError(
            requestError.response?.data?.message ||
              "We couldn't load this lead. Please try again.",
          );
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    loadLead();
    return () => {
      active = false;
    };
  }, [featchlead, id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-background px-4 py-10 text-on-surface">
        <div className="mx-auto max-w-4xl animate-pulse rounded-2xl border border-outline-variant bg-surface-container-low p-6">
          <div className="h-5 w-28 rounded bg-surface-variant" />
          <div className="mt-6 h-8 w-56 rounded bg-surface-variant" />
          <div className="mt-3 h-4 w-72 max-w-full rounded bg-surface-variant" />
          <div className="mt-8 h-36 rounded-xl bg-surface-variant" />
        </div>
      </main>
    );
  }

  if (error || !lead) {
    return (
      <main className="min-h-screen bg-background px-4 py-10 text-on-surface">
        <div className="mx-auto max-w-4xl rounded-2xl border border-outline-variant bg-surface-container-low p-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <RiArrowLeftLine size={18} />
            Back
          </button>
          <h1 className="text-xl font-semibold text-on-background">
            Lead unavailable
          </h1>
          <p role="alert" className="mt-2 text-sm text-on-surface-variant">
            {error || "This lead could not be found."}
          </p>
        </div>
      </main>
    );
  }

  const assignedTo =
    typeof lead.assignedTo === "object" ? lead.assignedTo?.name : null;
  const status = lead.status || "New";

  return (
    <main className="min-h-screen bg-background px-4 py-6 text-on-surface sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-surface-tint"
        >
          <RiArrowLeftLine size={18} />
          Back to leads
        </button>

        <section className="overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-low shadow-[0_8px_24px_rgba(29,28,23,0.06)]">
          <header className="flex flex-col gap-5 border-b border-outline-variant p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex min-w-0 items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-tertiary-fixed text-lg font-bold text-tertiary">
                {lead.name?.trim()?.charAt(0)?.toUpperCase() || <RiUser3Line />}
              </div>
              <div className="min-w-0">
                <p className="text-label-sm uppercase text-on-surface-variant">
                  Lead profile {lead.leadId ? `· ${lead.leadId}` : ""}
                </p>
                <h1 className="mt-1 truncate text-headline-md text-on-background">
                  {lead.name || "Unnamed lead"}
                </h1>
                <p className="mt-1 truncate text-sm text-on-surface-variant">
                  {lead.company || "Company not provided"}
                </p>
              </div>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-tertiary-fixed px-3 py-1.5 text-sm font-semibold text-tertiary">
              <span className="h-2 w-2 rounded-full bg-tertiary" />
              {status}
            </span>
          </header>

          <div className="grid gap-8 p-5 sm:grid-cols-2 sm:p-7">
            <div className="space-y-5">
              <h2 className="text-label-sm uppercase text-on-surface-variant">
                Contact information
              </h2>
              <a
                href={`mailto:${lead.email || ""}`}
                className="flex items-center gap-3 text-sm text-on-background hover:text-primary"
              >
                <RiMailLine className="text-primary" size={18} />
                <span className="break-all">{lead.email || "No email provided"}</span>
              </a>
              <a
                href={`tel:${lead.number || ""}`}
                className="flex items-center gap-3 text-sm text-on-background hover:text-primary"
              >
                <RiPhoneLine className="text-primary" size={18} />
                <span>{lead.number || "No phone provided"}</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-on-background">
                <RiGlobalLine className="text-primary" size={18} />
                <span>Source: {lead.source || "Not specified"}</span>
              </div>
            </div>

            <div className="space-y-5">
              <h2 className="text-label-sm uppercase text-on-surface-variant">
                Lead details
              </h2>
              <div className="flex items-center gap-3 text-sm text-on-background">
                <RiUser3Line className="text-primary" size={18} />
                <span>Assigned to: {assignedTo || "Unassigned"}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-on-background">
                <RiCalendarEventLine className="text-primary" size={18} />
                <span>Created: {formatDate(lead.createdAt)}</span>
              </div>
              {lead.createdBy?.name && (
                <div className="flex items-center gap-3 text-sm text-on-background">
                  <RiMapPinLine className="text-primary" size={18} />
                  <span>Created by: {lead.createdBy.name}</span>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 px-5 pb-6 sm:grid-cols-3 sm:px-7">
            <button
              type="button"
              disabled
              title="Lead editing is not available yet"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-outline-variant bg-surface-bright px-4 text-sm font-semibold text-on-surface-variant disabled:cursor-not-allowed disabled:opacity-70"
            >
              <RiEditLine size={18} />
              Edit Lead
            </button>
            <button
              type="button"
              disabled
              title="Follow-up scheduling is not available yet"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-outline-variant bg-surface-bright px-4 text-sm font-semibold text-on-surface-variant disabled:cursor-not-allowed disabled:opacity-70"
            >
              <RiCalendarEventLine size={18} />
              Add Follow-up
            </button>
            <button
              type="button"
              disabled
              title="Lead notes are not available yet"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-outline-variant bg-surface-bright px-4 text-sm font-semibold text-on-surface-variant disabled:cursor-not-allowed disabled:opacity-70"
            >
              <RiStickyNoteLine size={18} />
              Add Note
            </button>
          </div>

          <section className="border-t border-outline-variant px-5 py-6 sm:px-7">
            <h2 className="text-headline-sm text-on-background">
              Activity timeline
            </h2>
            <div className="mt-5 flex gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-tertiary-fixed text-tertiary">
                <RiCheckLine size={16} />
              </span>
              <div>
                <p className="text-sm font-semibold text-on-background">
                  Lead created
                </p>
                <p className="mt-1 text-sm text-on-surface-variant">
                  {formatDate(lead.createdAt)}
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default LeadId;
