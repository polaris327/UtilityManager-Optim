import { app } from '../../../bootstrap/core';
import { NoDeadlineStatus, TicketStatesGlobal } from '../../../components/ticket/ticket.constants';
import _ from 'lodash';

export const deadlineStatusList = {
  overdue: 'deadline.overdue',
  today: 'deadline.today',
  tomorrow: 'deadline.tomorrow',
  week: 'deadline.week',
  none: 'deadline.none'
};

class TicketReader {
  constructor(ticket) {
    this.ticket = ticket;
  }

  get branchId() {
    return this.ticket.branchId;
  }

  get client() {
    return this.ticket.client;
  }

  get created() {
    return new Date(this.ticket.created);
  }

  get nextDeadline() {
    return this.ticket.nextDeadline;
  }

  get nextDeadlineInBankDays() {
    if (_.includes(NoDeadlineStatus, this.status) || this.status === TicketStatesGlobal.REQUEST_COMPLETED) {
      // use 99, because angular translate messageformat could not handle -1
      return 99;
    }

    return this.ticket.numberOfBankDaysTillNextDeadline;
  }

  get deadlineStatus() {
    const { nextDeadlineInBankDays } = this;

    if (nextDeadlineInBankDays === 99) {
      return deadlineStatusList.none;
    }
    if (nextDeadlineInBankDays > 1) {
      // > 2 days
      return deadlineStatusList.week;
    }
    if (nextDeadlineInBankDays > 0) {
      // > 1 day
      return deadlineStatusList.tomorrow;
    }
    if (nextDeadlineInBankDays === 0) {
      // <= 1 day
      return deadlineStatusList.today;
    }

    // overdue
    return deadlineStatusList.overdue;
  }

  get status() {
    //return 'digital.fino.cyclope.api.events.receiving.StandingOrdersSent';
    return this.ticket.status;
  }

  get displayStatus() {
    return `app.ticket.status.${this.status}`;
  }

  get advisor() {
    const { advisor } = this.ticket;
    return `${advisor.firstname} ${advisor.lastname}`;
  }

  get dueDate() {
    // TODO: Add due date from ticket model
    const due = new Date(+new Date() - 4 * 24 * 60 * 60 * 1000);
    const days = parseInt(( new Date() - due) / (24 * 3600 * 1000));
    return `${days}`;
  }

  get role() {
    return this.ticket.inCharge;
  }

  get details() {
    return 'ticketdetails';
  }

  get id() {
    return this.ticket.id;
  }

  get rejections() {
    return this.ticket.rejections;
  }

  get transferringIban() {
    return this.ticket.oldIban;
  }

  get receivingIban() {
    return this.ticket.newIban;
  }

  get isCustomerAnEmployee() {
    return this.ticket.isCustomerTenantEmployee;
  }

  get requestType() {
    // The ``s are just to make sure we have a string
    return `${this.ticket.requestType}`.toLowerCase();
  }

  get guidanceType() {
    if (this.ticket.guidanceRequest) {
      return this.ticket.guidanceRequest.type;
    }
    return null;
  }
}

class TicketDetailReader extends TicketReader {
  constructor(ticket) {
    super(ticket);
  }

  get status() {
    return this.ticket.currentStatus;
  }

  get clientName() {
    const { client } = this.ticket;
    if (!client.firstname && !client.lastName) {
      return null;
    }

    return `${client.firstName} ${client.lastName}`;
  }

  get actions() {
    return this.ticket.availableActions;
  }

  get formValues() {
    return this.ticket.formValues;
  }

  get toIban() {
    return this.ticket.toIBAN;
  }

  get comments() {
    return this.ticket.comments;
  }

  get history() {

    return this.ticket.history;
  }

  get documents() {
    return this.ticket.documents;
  }

  get nextDeadline() {
    return this.ticket.nextDeadline;
  }

  get nextDeadlineInBankDays() {
    return this.ticket.numberOfBankDaysTillNextDeadline;
  }

  get availableActions() {
    return this.ticket.availableActions;
  }

  get address() {
    return this.ticket.formValues.address;
  }

  get postcode() {
    return this.ticket.formValues.postcode;
  }

  get city() {
    return this.ticket.formValues.city;
  }

  get birthday() {
    return this.ticket.formValues.birthday;
  }

  get salutation() {
    return this.ticket.formValues.salutation;
  }

  get email() {
    return this.ticket.guidanceRequest && this.ticket.guidanceRequest.data && this.ticket.guidanceRequest.data.emailAddress;
  }

  get transferringIban() {
    return this.ticket.fromIBAN;
  }

  get receivingIban() {
    return this.ticket.toIBAN;
  }
}

const ticketReaderFactory = () => {
  'ngInject';

  const createFor = (ticket) => {
    return new TicketReader(ticket);
  };

  const createForDetail = (ticket) => {
    return new TicketDetailReader(ticket);
  };

  return { createFor, createForDetail };
};

app.factory('ticketReaderFactory', ticketReaderFactory);
app.filter('ticketReader', (ticketReaderFactory) => {
  'ngInject';

  return _.memoize(function(items) {
    if (!items) {
      return items;
    }
    if (!angular.isArray(items)) {
      return ticketReaderFactory.createFor(items);
    }
    return _.map(items, i => {
      return ticketReaderFactory.createFor(i);
    });
  });
});
