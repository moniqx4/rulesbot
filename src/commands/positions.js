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
    title: 'Position Rule',
    color: '#2FA44F',
    text: 'You can put a TE or HB in your 4th WR position but no higher. Your top 3 WRs have to be WRs. You cannot have a WR as your 3rd TE on depth chart.\n',
    mrkdwn_in: ['text']
  },
  {
    title: 'Position Rule II',
    color: '#E3E4E6',
    text: 'HBs can not be subsituted in a FB or TE position.\n',
    mrkdwn_in: ['text']
  },  
  {
    title: 'Position Rule III',
    color: '#E3E4E6',
    text: 'FB can play FB-RB-TE. HB can play HB-WR. TE can play TE-FB. WR can play WR-HB. T can play T-TE\n',
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

module.exports = { pattern: /positions/ig, handler: handler }
