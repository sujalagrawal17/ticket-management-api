const express = require('express');
const Ticket = require('../models/ticket');
const router = express.Router();

// Create a new ticket
router.post('/', async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.status(201).send(ticket);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Read all tickets
router.get('/', async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.send(tickets);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Read a ticket by ID
router.get('/:id', async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).send();
    res.send(ticket);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a ticket
router.patch('/:id', async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!ticket) return res.status(404).send();
    res.send(ticket);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a ticket
router.delete('/:id', async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) return res.status(404).send();
    res.send(ticket);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
