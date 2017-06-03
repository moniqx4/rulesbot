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
    title: 'Rulesbot will help you find the rules when you need them.',
    color: '#2FA44F',
    text: '`/rules 4thdown` returns the 4thdown rules.',
    mrkdwn_in: ['text']
  },
  {
    title: '',
    color: '#2FA44F',    
	text: '`/rules playbook` returns the playbook rules.',	
    mrkdwn_in: ['text']
  },
 {
    title: '',
    color: '#2FA44F',    
	text: '`/rules playcalling` returns the playcalling rules.',	
    mrkdwn_in: ['text']
  },
{
    title: '',
    color: '#2FA44F',    
	text: '`/rules running` returns the running rules.',	
    mrkdwn_in: ['text']
  },
{
    title: '',
    color: '#2FA44F',    
	text: '`/rules uniforms` returns the uniforms rules.',	
    mrkdwn_in: ['text']
  },
{
    title: '',
    color: '#2FA44F',    
	text: '`/rules positions` returns the positions rules.',	
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

module.exports = { pattern: /help/ig, handler: handler }
