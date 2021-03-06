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
  },
{
    title: '',
    color: '#2FA44F',    
	text: '`/rules audibles` returns the audible rules.',	
    mrkdwn_in: ['text']
  },
  {
    title: '',
    color: '#2FA44F',    
	text: '`/rules disconnect` returns the rule pertaining to disconnected games.',	
    mrkdwn_in: ['text']
  },
  {
    title: '',
    color: '#2FA44F',    
	text: '`/rules nohuddle` returns the rule pertaining to using nohuddle during a game.',	
    mrkdwn_in: ['text']
  },
  {
    title: '',
    color: '#2FA44F',    
	text: '`/rules goalline` returns the rules for goalline situations .',	
    mrkdwn_in: ['text']
  },
   {
    title: '',
    color: '#2FA44F',    
	text: '`/rules cpugame` returns the rule for when you have to play the CPU.',	
    mrkdwn_in: ['text']
  },
   {
    title: '',
    color: '#2FA44F',    
	text: '`/rules trades` returns the rules for making trades.',	
    mrkdwn_in: ['text']
  },
 {
    title: '',
    color: '#2FA44F',    
	text: '`/rules playercontrol` returns the rules for usering players.',	
    mrkdwn_in: ['text']
  },
{
    title: '',
    color: '#2FA44F',    
	text: '`/rules interception` returns the rules for limits on number of interceptions for QB.',	
    mrkdwn_in: ['text']
  },
{
    title: '',
    color: '#2FA44F',    
	text: '`/rules psq` returns the rules pertaining to practice squad.',	
    mrkdwn_in: ['text']
  },
  {
    title: '',
    color: '#2FA44F',    
  text: '`/rules special` returns the rules pertaining to special team plays.', 
    mrkdwn_in: ['text']
  },
  {
    title: '',
    color: '#2FA44F',    
  text: '`/rules offtopdollar` returns the top dollar minimum to pay for 90+ players QB,HB,WR,TE,FB.', 
    mrkdwn_in: ['text']
  },
  {
    title: '',
    color: '#2FA44F',    
  text: '`/rules offltopdollar` returns the top dollar minimum to pay for 90+ players Tackles, Guards, and Centers.', 
    mrkdwn_in: ['text']
  },
   {
    title: '',
    color: '#2FA44F',    
  text: '`/rules deftopdollar` returns the top dollar minimum to pay for 90+ players CB,LB,DE,FS,SS.', 
    mrkdwn_in: ['text']
  },
  {
    title: '',
    color: '#2FA44F',    
  text: '`/rules spctopdollar` returns the top dollar minimum to pay for 90+ players Punters and Kickers.', 
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
