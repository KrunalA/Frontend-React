import React from 'react';

function Ticket({ ticket }) {
  return (
    <div className="Ticket">
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>User: {ticket.user}</p>
      <p>Priority: {getPriorityLabel(ticket.priority)}</p>
    </div>
  );
}

function getPriorityLabel(priority) {
  const priorityLabels = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority',
  };
  return priorityLabels[priority] || 'Unknown';
}

export default Ticket;
