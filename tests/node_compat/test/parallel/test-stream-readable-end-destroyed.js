// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 18.12.1
// This file is automatically generated by `tests/node_compat/runner/setup.ts`. Do not modify this file manually.

'use strict';

const common = require('../common');
const { Readable } = require('stream');

{
  // Don't emit 'end' after 'close'.

  const r = new Readable();

  r.on('end', common.mustNotCall());
  r.resume();
  r.destroy();
  r.on('close', common.mustCall(() => {
    r.push(null);
  }));
}
