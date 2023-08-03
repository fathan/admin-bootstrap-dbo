import { ISupplier } from "@/interfaces/ISupplier";

export interface OrderMeta {
  current_page: number;
  total_pages: number;
  total_count: number;
  page_size: number;
}

export interface Order {
  meta: OrderMeta;
  data: ISupplier[]
}

const data = {
  meta: {
    current_page: 1,
    total_pages: 3,
    total_count: 21,
    page_size: 10
  },
  data: [
    {
      created_at: "2023-07-31T19:32:27.037Z",
      updated_at: "2023-07-31T22:02:54.392Z",
      company_name: "Ankunding, Volkman and Beatty",
      contact_name: "Mabel Mitchell",
      address: "address 1",
      city: "city 1",
      postal_code: "postal_code 1",
      phone: "phone 1",
      province: "province 1",
      email: "Althea30@gmail.com",
      id: 1
    },
    {
      created_at: "2023-08-01T09:37:23.137Z",
      updated_at: "2023-07-31T19:52:27.121Z",
      company_name: "Parisian Inc",
      contact_name: "Samuel Mann",
      address: "address 2",
      city: "city 2",
      postal_code: "postal_code 2",
      phone: "phone 2",
      province: "province 2",
      email: "Ahmed.Zieme@yahoo.com",
      id: 2
    },
    {
      created_at: "2023-08-01T06:24:19.920Z",
      updated_at: "2023-08-01T06:39:56.274Z",
      company_name: "Crona - Russel",
      contact_name: "Courtney Simonis",
      address: "address 3",
      city: "city 3",
      postal_code: "postal_code 3",
      phone: "phone 3",
      province: "province 3",
      email: "Kaya.Halvorson99@yahoo.com",
      id: 3
    },
    {
      created_at: "2023-08-01T09:22:57.746Z",
      updated_at: "2023-07-31T19:05:29.327Z",
      company_name: "Goodwin - O'Hara",
      contact_name: "Myron Brown",
      address: "address 4",
      city: "city 4",
      postal_code: "postal_code 4",
      phone: "phone 4",
      province: "province 4",
      email: "Jordy_Carter64@yahoo.com",
      id: 4
    },
    {
      created_at: "2023-08-01T11:05:35.107Z",
      updated_at: "2023-08-01T11:15:54.405Z",
      company_name: "Graham - Thompson",
      contact_name: "Darrell Schmitt Sr.",
      address: "address 5",
      city: "city 5",
      postal_code: "postal_code 5",
      phone: "phone 5",
      province: "province 5",
      email: "Adelia57@gmail.com",
      id: 5
    },
    {
      created_at: "2023-07-31T14:28:41.386Z",
      updated_at: "2023-08-01T07:01:59.505Z",
      company_name: "Stehr LLC",
      contact_name: "Ms. Joseph Kuhlman",
      address: "address 6",
      city: "city 6",
      postal_code: "postal_code 6",
      phone: "phone 6",
      province: "province 6",
      email: "Jocelyn.Muller95@yahoo.com",
      id: 6
    },
    {
      created_at: "2023-08-01T01:21:02.621Z",
      updated_at: "2023-08-01T00:47:38.946Z",
      company_name: "Powlowski, O'Connell and Padberg",
      contact_name: "Terrence Kihn",
      address: "address 7",
      city: "city 7",
      postal_code: "postal_code 7",
      phone: "phone 7",
      province: "province 7",
      email: "Sally.Bruen@yahoo.com",
      id: 7
    },
    {
      created_at: "2023-08-01T01:25:40.590Z",
      updated_at: "2023-08-01T02:29:11.474Z",
      company_name: "Crooks LLC",
      contact_name: "Jeannette Hansen",
      address: "address 8",
      city: "city 8",
      postal_code: "postal_code 8",
      phone: "phone 8",
      province: "province 8",
      email: "Barry.Mohr13@gmail.com",
      id: 8
    },
    {
      created_at: "2023-08-01T02:51:51.849Z",
      updated_at: "2023-08-01T10:07:36.166Z",
      company_name: "Hills - Zulauf",
      contact_name: "Jose Greenholt",
      address: "address 9",
      city: "city 9",
      postal_code: "postal_code 9",
      phone: "phone 9",
      province: "province 9",
      email: "Obie29@gmail.com",
      id: 9
    },
    {
      created_at: "2023-08-01T03:28:49.880Z",
      updated_at: "2023-07-31T16:23:42.901Z",
      company_name: "Yundt and Sons",
      contact_name: "Neil Davis",
      address: "address 10",
      city: "city 10",
      postal_code: "postal_code 10",
      phone: "phone 10",
      province: "province 10",
      email: "Jodie28@gmail.com",
      id: 10
    },
    {
      created_at: "2023-08-01T05:23:52.241Z",
      updated_at: "2023-07-31T22:41:49.057Z",
      company_name: "Gibson, Torp and Strosin",
      contact_name: "Terence Torphy",
      address: "address 11",
      city: "city 11",
      postal_code: "postal_code 11",
      phone: "phone 11",
      province: "province 11",
      email: "Brycen44@hotmail.com",
      id: 11
    },
    {
      created_at: "2023-08-01T12:44:27.884Z",
      updated_at: "2023-07-31T14:03:23.616Z",
      company_name: "Brekke - Mueller",
      contact_name: "Billy Bauch",
      address: "address 12",
      city: "city 12",
      postal_code: "postal_code 12",
      phone: "phone 12",
      province: "province 12",
      email: "Grant_Lemke@hotmail.com",
      id: 12
    },
    {
      created_at: "2023-07-31T14:55:36.890Z",
      updated_at: "2023-07-31T18:03:26.007Z",
      company_name: "Kassulke, Orn and Franey",
      contact_name: "Marsha Wehner",
      address: "address 13",
      city: "city 13",
      postal_code: "postal_code 13",
      phone: "phone 13",
      province: "province 13",
      email: "Devan_Keebler41@yahoo.com",
      id: 13
    },
    {
      created_at: "2023-08-01T10:54:36.270Z",
      updated_at: "2023-07-31T17:04:59.947Z",
      company_name: "Mills Group",
      contact_name: "Opal Bauch",
      address: "address 14",
      city: "city 14",
      postal_code: "postal_code 14",
      phone: "phone 14",
      province: "province 14",
      email: "Jacky.Connelly47@yahoo.com",
      id: 14
    },
    {
      created_at: "2023-08-01T04:58:37.866Z",
      updated_at: "2023-07-31T18:26:28.332Z",
      company_name: "Gleichner - Runolfsson",
      contact_name: "Megan Cartwright",
      address: "address 15",
      city: "city 15",
      postal_code: "postal_code 15",
      phone: "phone 15",
      province: "province 15",
      email: "Mozell.Krajcik@yahoo.com",
      id: 15
    },
    {
      created_at: "2023-07-31T17:31:54.620Z",
      updated_at: "2023-08-01T03:14:16.273Z",
      company_name: "Blick, Considine and Thiel",
      contact_name: "Debra Kub",
      address: "address 16",
      city: "city 16",
      postal_code: "postal_code 16",
      phone: "phone 16",
      province: "province 16",
      email: "Diana21@yahoo.com",
      id: 16
    },
    {
      created_at: "2023-07-31T21:48:38.481Z",
      updated_at: "2023-07-31T17:46:07.488Z",
      company_name: "Predovic Group",
      contact_name: "Wayne Gutkowski",
      address: "address 17",
      city: "city 17",
      postal_code: "postal_code 17",
      phone: "phone 17",
      province: "province 17",
      email: "Charlie_Dickinson@gmail.com",
      id: 17
    },
    {
      created_at: "2023-07-31T18:42:19.566Z",
      updated_at: "2023-08-01T07:50:25.888Z",
      company_name: "Bode, Runolfsdottir and Anderson",
      contact_name: "Jermaine Hermiston",
      address: "address 18",
      city: "city 18",
      postal_code: "postal_code 18",
      phone: "phone 18",
      province: "province 18",
      email: "Imani_Kemmer@yahoo.com",
      id: 18
    },
    {
      created_at: "2023-07-31T18:55:37.759Z",
      updated_at: "2023-08-01T11:04:26.632Z",
      company_name: "Fay - Mante",
      contact_name: "Annette Cartwright",
      address: "address 19",
      city: "city 19",
      postal_code: "postal_code 19",
      phone: "phone 19",
      province: "province 19",
      email: "Agustin.Blick@yahoo.com",
      id: 19
    },
    {
      created_at: "2023-08-01T12:20:02.040Z",
      updated_at: "2023-08-01T02:19:03.932Z",
      company_name: "Green and Sons",
      contact_name: "Perry McClure I",
      address: "address 20",
      city: "city 20",
      postal_code: "postal_code 20",
      phone: "phone 20",
      province: "province 20",
      email: "Norwood_Larkin68@yahoo.com",
      id: 20
    },
    {
      created_at: "2023-08-01T07:06:15.659Z",
      updated_at: "2023-07-31T23:56:23.340Z",
      company_name: "Goodwin, O'Kon and Sipes",
      contact_name: "Brooke Witting",
      address: "address 21",
      city: "city 21",
      postal_code: "postal_code 21",
      phone: "phone 21",
      province: "province 21",
      email: "Elda_Kertzmann64@yahoo.com",
      id: 21
    }
  ]
}

export default data;