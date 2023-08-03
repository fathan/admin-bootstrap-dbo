export const columnTableSupplier = [
  { key: 'email', label: 'Email', sortable: true },
  { key: 'company_name', label: 'Company Name', sortable: true },
  { key: 'contact_name', label: 'Contact Name', sortable: true },
  { key: 'created_at', label: 'Created At', sortable: true },
  {
    key: 'Actions',
    label: 'Actions',
    isActionButton: true,
    actionButtons: ['edit', 'delete', 'detail']
  }
];