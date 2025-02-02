---
title: 'Automating Multi Room Audio'
pubDate: '2025-02-01'
description: "One of my longest standing automations is based around the idea of having audio follow you around the house, and it's easy to achieve with Home Assistant and Node Red"
author: 'Adam Clarkson'
tags: ["Home Automation"]
---

This is one of my longest standing but favourite automations, being able to have audio automatically follow you around the house as you move room to room is one of those automations you won't notice every day, you'll just appreciate it.

I'd had sonos speakers for a while before I got into Home Automation, and being able to group them and play the same thing in multiple rooms is great - but needing to take out your phone, open an app, and create groups adds a certain amount of friction. That friction wasn't enough to prevent me from doing it when I was intentionally thinking about it, but it was very intentional and ripe for automating.

By automating multi room audio based on room presence when we're listening to music or watching TV and need to grab something from the kitchen, the audio automatically follows.

## The Principle

One speaker serves as the "leader" in my setup, for us this is the Sonos Beam soundbar which is attached to the living room TV. When presence is detected in another room which has a Sonos speaker, this speaker is added to a group with the "leader" and the audio starts playing in the room. When presence is no longer detected, then the room is removed from the group.
