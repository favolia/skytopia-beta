import { world as Skytopia } from "@minecraft/server";
import { showCompassModal } from "./functions/CompassModal/compassModal";

const compass = "minecraft:compass"
Skytopia.afterEvents.itemUse.subscribe(eventData => {
    const {itemStack: block, source: player} = eventData

    switch (block.typeId) {
        case compass:
            showCompassModal(player)
            break;
    
        default:
            break;
    }
})
// const beforeEvents = Skytopia.beforeEvents
    
//     beforeEvents.itemStartUseOn.subscribe(e => {
//         const {block, source: player} = e
    
//         block.typeId == compass ? showCompassModal(player) : "";

//     })





