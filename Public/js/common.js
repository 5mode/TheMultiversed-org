
/*
 * Copyright (c) 2016, 2024, 5 Mode
 * All rights reserved.
 * 
 * This file is part of Simplicity.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither 5 Mode nor the names of its contributors 
 *       may be used to endorse or promote products derived from this software 
 *       without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDERS OR CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * Simplicity common javascript code.
 *
 * @author Daniele Bonini <my25mb@aol.com>
 * @copyrights (c) 2021, 2024, 5 Mode 
 */

function closeMe(tthis) {
  $(tthis).parent().hide();
}

/**
 * Encrypt the given string
 * 
 * @param {string} string - The string to encrypt
 * @returns {string} the encrypted string
 */
function encryptSha2(string) {
  var jsSHAo = new jsSHA("SHA-256", "TEXT", 1);
  jsSHAo.update(string);
  return jsSHAo.getHash("HEX");
}

/**
 * Get the height of the whole document
 * 
 * @param {none} 
 * @returns {int} the document height
 */
function getDocHeight() {
  var D = document;
  return Math.max(
      D.body.scrollHeight, D.documentElement.scrollHeight,
      D.body.offsetHeight, D.documentElement.offsetHeight,
      D.body.clientHeight, D.documentElement.clientHeight
  );
}

function getDocHeight2() {
  var D = document;
  var scrollMaxY;
  if (window.scrollMaxY) {
    scrollMaxY = window.scrollMaxY;
  } else {
    scrollMaxY = D.documentElement.scrollHeight;
  }
  var height = Math.max(
      D.body.scrollHeight, scrollMaxY,    
      D.body.offsetHeight, D.documentElement.offsetHeight,
      D.body.clientHeight, D.documentElement.clientHeight
  );
  return height;
}


/**
 * Get the width of the whole document
 * 
 * @param {none} 
 * @returns {int} the document width
 */
function getDocWidth() {
  var D = document;
  return Math.max(
      D.body.scrollWidth, D.documentElement.scrollWidth,
      D.body.offsetWidth, D.documentElement.offsetWidth,
      D.body.clientWidth, D.documentElement.clientWidth
  );
}

function getDocWidth2() {
  var D = document;
  var scrollMaxX;
  if (window.scrollMaxX) {
    scrollMaxX = window.scrollMaxX;
  } else {
    scrollMaxX = D.documentElement.scrollWidth;
  }
  return Math.max(
      D.body.scrollWidth, scrollMaxX,
      D.body.offsetWidth, D.documentElement.offsetWidth,
      D.body.clientWidth, D.documentElement.clientWidth
  );
}

function rnd(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

/**
  * Open a link from any event handler
  * 
  * @param {string} href the link to open
  * @param {string} target the frame target
  * @returns {none}
  */
function openLink(href, target) {
  window.open(href, target);
}