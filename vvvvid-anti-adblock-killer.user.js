// ==UserScript==
// @name        VVVVID Anti-Adblock Killer
// @namespace   https://github.com/Nearata/vvvvid-anti-adblock-killer
// @copyright   2018+, William Di Cicco (Nearata)
// @license     MIT
// @version     1.0.1
// @description Previene la disattivazione dell'adblock
// @author      Nearata <nearata@protonmail.com>
// @supportURL  https://github.com/Nearata/vvvvid-anti-adblock-killer/issues
// @match       *://www.vvvvid.it/*
// @exclude     *://www.vvvvid.it/adblock.html
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    function startAdv(g, c, f) {
        const e = this;
        const d = e.playlistItem.toJSON();

        if(("vod_mode" in d) && (d.vod_mode & 1) === 0 && !window.vvvvid.user.svodActive()) {
            window.vvvvid.showGenericError("Il video selezionato è disponibile solo in modalità abbonamento.", function() {
                window.vvvvid.router.mainView.resetApplication();
            });
            return;
        }

        if(!g) {
            e.destroyPlayers();
        }

        f();
    }

    window.vvvvid.models.PlayerObj.prototype.startAdv = startAdv;
})();
