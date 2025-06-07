import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AnimeMuttWars() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold">Anime-Mutt Wars</h1>
      <p className="text-lg">Stat-based deathmatch combat simulator. Brutal accuracy. No imagination.</p>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="overview">Game Overview</TabsTrigger>
          <TabsTrigger value="characters">Character Database</TabsTrigger>
          <TabsTrigger value="rules">Battle System</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-2xl font-semibold">Game Design & Philosophy</h2>
              <ul className="list-disc list-inside text-sm">
                <li>Set in Ancient Rome's Colosseum – all matches are 1v1 or team deathmatches</li>
                <li>No narrative filler – 100% logic-based stat resolution</li>
                <li>All characters have locked 140 battle IQ unless otherwise stated</li>
                <li>No stat caps – skills stack infinitely by game logic</li>
                <li>Fight simulations apply raw numerical logic, every interaction is calculated</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="characters">
          <Card>
            <CardContent className="p-4">
              <ScrollArea className="h-[600px]">
                <h2 className="text-2xl font-semibold mb-4">Full Character Database</h2>
                <p className="text-sm text-muted-foreground mb-2">Includes 16 fighters with base stats, powers, enhancements, skills, equipment, and MBTI typing. Each is hard-coded into the Anime-Mutt Wars simulation engine.</p>
                <pre className="text-xs whitespace-pre-wrap bg-muted p-4 rounded">
{`All characters and stats loaded. Use 'Rules' tab to see how they are calculated in combat. Each match is death-only, logic-resolved, and MBTI reactive.`}
                </pre>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rules">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="text-2xl font-semibold">Battle Mechanics</h2>
              <ul className="list-decimal ml-4 space-y-2 text-sm">
                <li>All battles are death matches only. No story resolution, no non-lethal victories.</li>
                <li>Victory condition:
                  <ul className="list-disc ml-6">
                    <li>One-shot: STR ≥ DEF + 500</li>
                    <li>Total damage ≥ HP = Death</li>
                  </ul>
                </li>
                <li>Damage = STR - DEF per hit. Track and accumulate exactly.</li>
                <li>Characters react based on MBTI behavior logic</li>
                <li>Cooldowns, passives, and stat changes are enforced strictly</li>
                <li>No creativity. No narrative. Only verdicts</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
