export const columnTableCustomer = [
  { key: 'email', label: 'Email', sortable: true },
  { key: 'first_name', label: 'First Name', sortable: true },
  { key: 'last_name', label: 'Last Name', sortable: true },
  { key: 'phone', label: 'Phone', sortable: true },
  { key: 'created_at', label: 'Created At', sortable: true },
  {
    key: 'Actions',
    label: 'Actions',
    isActionButton: true,
    actionButtons: ['edit', 'delete', 'detail']
  }
];
