/*
 * Copyright (C) 2019 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

define([ '../config' ], function(config) {
  var parseDecimalNumber = require('parse-decimal-number');
  var I18n = require('i18n!quiz_statistics').default;

  return function parseNumber(s) {
    if (s == null) {
      return NaN;
    } else if (typeof s === 'number') {
      return s;
    }

    var num = parseDecimalNumber(s, {
        thousands: I18n.lookup('number.format.delimiter'),
        decimal: I18n.lookup('number.format.separator')
    });

    // fallback to default delimiters if invalid with locale specific ones
    if (isNaN(num)) {
      return parseDecimalNumber(s);
    } else {
      return num;
    }
  };
});
