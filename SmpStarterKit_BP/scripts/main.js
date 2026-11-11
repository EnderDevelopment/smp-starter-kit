import { world } from "@minecraft/server";

const KIT_TAG = "smp_starter_kit_received";

const KIT_ITEMS = [
  ["minecraft:stone_sword", 1],
  ["minecraft:stone_pickaxe", 1],
  ["minecraft:stone_axe", 1],
  ["minecraft:stone_shovel", 1],
  ["minecraft:oak_log", 16],
  ["minecraft:bread", 16],
  ["minecraft:torch", 32]
];

world.afterEvents.playerSpawn.subscribe((event) => {
  const player = event.player;

  if (!event.initialSpawn || player.hasTag(KIT_TAG)) {
    return;
  }

  for (const [itemId, amount] of KIT_ITEMS) {
    player.runCommand(`give @s ${itemId} ${amount}`);
  }

  player.addTag(KIT_TAG);
  player.sendMessage("Welcome to the SMP! Your starter kit is ready.");
});
