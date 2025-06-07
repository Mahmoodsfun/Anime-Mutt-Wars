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
          <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Full Character Database</h2>
          <p>16 characters loaded with hundreds of unique enhancements and MBTI-based logic.</p>
          <pre style={{ backgroundColor: "#f4f4f4", padding: "1rem", overflowX: "auto" }}>
{`All character profiles are available and loaded for simulation. Logic parsing applies during battle runtime.

Examples: Saitama, Jinwoo, Bun, Steel Knight, Thorfinn, Genus (multi-phase), Demon Slayer, Mage, Priest, Ninja Turtles, etc.`}
          </pre>
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
