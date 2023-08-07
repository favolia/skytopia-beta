const clientName = 'Skytopia'

import { world as Skytopia, system } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";


function sendMessage(text) {
    // Skytopia.sendMessage(`§a§a§lWelcome §fto §b§l${clientName} §fserver.`)
    Skytopia.sendMessage(`§b§l${clientName}: §r§f${text}`)
}

export function showCompassModal(player) {
    const compassModal = new ActionFormData();

    compassModal.title('Skytopia Menu')
    compassModal.body('Disini deskripsi menu')
    compassModal.button('+50 Diamond', `textures/icons/diamond_icon.png`)
    compassModal.button('Button 2')
    compassModal.button('Button 3')

    compassModal.show(player)
        .then( async result => {
            const {selection, canceled} = result

            switch (selection) {
                case 0:
                    sendMessage('§a+50 Diamond')
                    player.runCommandAsync('/give @s diamond 50')
                    break;
                case 1:
                    sendMessage('you have selected the second button')
                    break;
                case 2:
                    sendMessage('you have selected the third button')
                    break;
                default:
                    break;
            }
        })

}

