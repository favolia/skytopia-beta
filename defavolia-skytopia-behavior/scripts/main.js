import { world as Skytopia, system } from "@minecraft/server";
import { showActionFormData } from "./functions/Modal/ActionFormData";

Skytopia.afterEvents.playerSpawn.subscribe(ev => {
    const { initialSpawn, player } = ev
    if (initialSpawn && !player.hasTag('survival')) {
        system.runTimeout(() => {
            showActionFormData(player)
        }, 60)
    }

})

system.runInterval(() => {
    const mcPlayer = Skytopia.getPlayers();

    let radius = 3

    const setLocation = {
        x: -105,
        y: 75,
        z: 80
    };

    radius <= 0 ? 0 : radius - 1

    mcPlayer.every(p => {
        let { x, y, z } = p.location;
        
        const digitX = String(x).split('.')[0];
        const digitY = String(y).split('.')[0];
        const digitZ = String(z).split('.')[0];
    
        const radiusEntry = Math.abs(digitX - setLocation.x - 1) <= radius &&
                            Math.abs(digitY - setLocation.y) <= radius &&
                            Math.abs(digitZ - setLocation.z) <= radius;
    
        if (radiusEntry && !p.hasTag('openMenu')) {
            p.addTag('openMenu');
            showActionFormData(p);
        } else if (!radiusEntry && p.hasTag('openMenu')) {
            p.removeTag('openMenu');
        }
    });
    
}, 60);



