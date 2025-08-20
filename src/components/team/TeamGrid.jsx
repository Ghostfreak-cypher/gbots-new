"use client";

import React, { useEffect, useMemo, useState } from "react";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import { teamAPI, apiUtils } from "@/lib/apiService";

const TeamGrid = ({ filters }) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isDesktop, setIsDesktop] = useState(false);
  const defaultFilters = useMemo(() => ({}), []);
  const effectiveFilters = filters ?? defaultFilters;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    teamAPI
      .getAll(effectiveFilters)
      .then((res) => {
        if (!isMounted) return;
        const list = Array.isArray(res)
          ? res
          : Array.isArray(res?.data)
          ? res.data
          : Array.isArray(res?.teamMembers)
          ? res.teamMembers
          : Array.isArray(res?.members)
          ? res.members
          : [];
        setMembers(list);
        setError("");
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(apiUtils.handleError(err));
      })
      .finally(() => {
        if (!isMounted) return;
        setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [effectiveFilters]);

  const normalizedMembers = useMemo(() => {
    return members.map((m, idx) => {
      const firstName = m.firstName || m.firstname || m.name?.first || "";
      const lastName = m.lastName || m.lastname || m.name?.last || "";
      const fullName = m.name || `${firstName} ${lastName}`.trim() || "Team Member";
      const role = m.role || m.Role || m.position || m.title || "Member";
      const username = m.handle || m.username || (fullName ? fullName.split(" ")[0]?.toLowerCase() : "member");
      const avatar = m.photo || m.avatarUrl || m.image || "/Grobotslogo.png";
      const status = m.status || (m.activity === false ? "Offline" : "Online");
      const email = m.email || m.contactEmail;
      return {
        key: m.id || m._id || idx,
        name: fullName,
        title: role,
        handle: username,
        avatarUrl: avatar,
        miniAvatarUrl: avatar,
        status,
        email,
        department: m.department,
        branch: m.branch,
        course: m.course,
        yearOfLeaving: m.yearOfLeaving,
        Role: m.Role,
      };
    });
  }, [members]);

  if (error) {
    return (
      <div className="mb-6 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-sm">{error}</div>
    );
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-[380px] rounded-3xl border border-gray-800 bg-gray-900/40 animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {normalizedMembers.map((m) => (
        <TeamMemberCard key={m.key} member={m} />
      ))}
    </section>
  );
};

export default TeamGrid;


