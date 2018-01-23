/**
 This file is part of the meta.js library.

 Copyright (C) 2017 JAAK MUSIC LTD

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.

 If you have any questions please contact yo@jaak.io
*/

import { META_ID_USERNAME_SUFFIX } from '@meta.js/shared'
import slugify from 'slugify'

/**
 * Get a META Identity `username` from a common name
 *
 * @param  {String} commonName Common name to use for META Identity username
 * @return {String}            META Identity username
 */
const getUsernameFromName = commonName => {
  if (typeof commonName === 'undefined' || typeof commonName !== 'string') {
    throw new Error('`commonName` is undefined or not of type string.')
  }

  return `${slugify(commonName.toLowerCase())}${META_ID_USERNAME_SUFFIX}`
}

export default getUsernameFromName
