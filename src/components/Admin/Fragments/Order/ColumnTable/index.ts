export const columnTableOrder = [
  { key: 'code', label: 'Code', sortable: true },
  { key: 'order_date', label: 'Order Date', sortable: true },
  { key: 'created_at', label: 'Created At', sortable: true },
  {
    key: 'Actions',
    label: 'Actions',
    isActionButton: true,
    actionButtons: ['delete', 'detail']
  }
];