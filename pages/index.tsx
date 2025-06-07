import React, { useState } from "react";

export default function AnimeMuttWars() {
  const [tab, setTab] = useState("overview");

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Anime-Mutt Wars</h1>
      <p style={{ fontSize: "1rem", marginBottom: "1rem" }}>
        Stat-based deathmatch combat simulator. Brutal accuracy. No imagination.
      </p>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <button onClick={() => setTab("overview")}>Game Overview</button>
        <button onClick={() => setTab("characters")}>Character Database</button>
        <button onClick={() => setTab("rules")}>Battle System</button>
      </div>

      {tab === "overview" && (
        <div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Game Design & Philosophy</h2>
          <ul style={{ paddingLeft: "1rem" }}>
            <li>Set in Ancient Rome's Colosseum – all matches are 1v1 or team deathmatches</li>
            <li>No narrative filler – 100% logic-based stat resolution</li>
            <li>All characters have locked 140 battle IQ unless otherwise stated</li>
            <li>No stat caps – skills stack infinitely by game logic</li>
            <li>Fight simulations apply raw numerical logic, every interaction is calculated</li>
          </ul>
        </div>
      )}

      {tab === "characters" && (
        <div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Character Database</h2>
          <p>All 16 characters below. Scroll to view complete fighting styles, stats, gear, and enhancements.</p>
          <div style={{ maxHeight: "600px", overflowY: "scroll", marginTop: "1rem" }}>
            {[...Array(16).keys()].map(i => (
              <div key={i} style={{ marginBottom: "1.5rem", padding: "1rem", background: "#f4f4f4", borderRadius: "8px" }}>
                <h3 style={{ fontWeight: "bold" }}>Character {i + 1}</h3>
                <p><strong>Name:</strong> Placeholder {i + 1}</p>
                <p><strong>MBTI:</strong> Type</p>
                <p><strong>Fighting Style:</strong> Brief description of their strategy and technique.</p>
                <p><strong>Equipment:</strong> List of gear used by this fighter.</p>
                <p><strong>Stats:</strong> STR • DEF • RS • CS • AGI • HP</p>
                <p><strong>Enhancements:</strong> Key boosts, passive effects, or transformations.</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === "rules" && (
        <div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Battle Mechanics</h2>
          <ul style={{ paddingLeft: "1rem" }}>
            <li>All battles are death matches only</li>
            <li>Victory conditions:
              <ul>
                <li>1-shot kill: STR ≥ DEF + 500</li>
                <li>Total accumulated damage ≥ HP = Death</li>
              </ul>
            </li>
            <li>Damage = STR - DEF per strike</li>
            <li>All passives, cooldowns, and status effects apply per profile</li>
            <li>Characters follow MBTI-based behavior in combat</li>
            <li>No speculation. No role-play. Results are final and computed only</li>
          </ul>
        </div>
      )}
    </div>
  );
}
