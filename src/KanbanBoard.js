import React from 'react';
import Ticket from './Ticket';

function KanbanBoard({ tickets, groupingOption, sortingOption }) {
  const groupedAndSortedTickets = groupAndSortTickets(tickets, groupingOption, sortingOption);

  return (
    <div className="KanbanBoard">
      {groupedAndSortedTickets.map((group) => (
        <div key={group.title}>
          <h2>{group.title}</h2>
          <div className="ticket-list">
            {group.tickets.map((ticket) => (
              <Ticket key={ticket.id} ticket={ticket} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function groupAndSortTickets(tickets, groupingOption, sortingOption) {
  let groupedTickets = [];

  // Grouping logic based on groupingOption
  if (groupingOption === 'status') {
    // Group by status
    // Implement grouping by status here
  } else if (groupingOption === 'user') {
    // Group by user
    // Implement grouping by user here
  } else if (groupingOption === 'priority') {
    // Group by priority
    // Implement grouping by priority here
  }

  // Sorting logic based on sortingOption
  if (sortingOption === 'priority') {
    groupedTickets.forEach((group) => {
      group.tickets.sort((a, b) => b.priority - a.priority);
    });
  } else if (sortingOption === 'title') {
    groupedTickets.forEach((group) => {
      group.tickets.sort((a, b) => a.title.localeCompare(b.title));
    });
  }

  return groupedTickets;
}

export default KanbanBoard;
