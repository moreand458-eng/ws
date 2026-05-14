/* Copyright (c) 2026 ESCANOR - Cyber Dev. All rights reserved. Built for ESCANOR Academy. */

/**
 * ESCANOR-WS
 * A clean, high-performance WhatsApp Bot Framework built on @whiskeysockets/baileys.
 * Zero obfuscation. 100% transparent. All session data stays local.
 *
 * @module escanor-ws
 */

export { Client }               from './core/Client.js';
export { AuthManager }          from './core/AuthManager.js';
export { CommandSystem }        from './handlers/CommandSystem.js';
export { EventHandler }         from './handlers/EventHandler.js';
export { parseMessage,
         sanitizeInput }        from './utils/Parser.js';
export { MediaSender }          from './utils/Media.js';
export { EscanorLogger,
         LogLevel,
         logger }               from './utils/Logger.js';
export { buildConfig,
         isOwner }              from './utils/Config.js';
