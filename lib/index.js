/*
*copyright Ryan Day 2012
*
* Licensed under the MIT license:
*   http://www.opensource.org/licenses/mit-license.php
*
* this is the main server side application file for node-qrcode.
* these exports use serverside canvas api methods for file IO and buffers
*
*/

const QRCode = require('./core/qrcode')
const CanvasRenderer = require('./renderer/canvas')
const SvgTagRenderer = require('./renderer/svg-tag')

module.exports = { QRCode, CanvasRenderer, SvgTagRenderer };
