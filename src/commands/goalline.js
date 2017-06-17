'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'Rulesbot',
  icon_emoji: config('ICON_EMOJI')
}

let attachments = [
  {
    title: 'Goal Line Formation',
    color: '#2FA44F',
    text: 'The use of the goal line formation is reserved for situations where the user is inside either 10 yard line or if the To Go yardage is in inches.\n',
    mrkdwn_in: ['text']
  }
]

const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /goalline/ig, handler: handler }
