import { ICustomer } from "@/interfaces/ICustomer";

export interface OrderMeta {
  current_page: number;
  total_pages: number;
  total_count: number;
  page_size: number;
}

export interface Order {
  meta: OrderMeta;
  data: ICustomer[]
}

const data = {
  meta: {
    current_page: 1,
    total_pages: 2,
    total_count: 17,
    page_size: 10
  },
  data: [
    {
      created_at: "2023-07-31T23:10:24.560Z",
      updated_at: "2023-08-01T01:44:31.238Z",
      first_name: "Aliza",
      last_name: "Bashirian",
      address: "Abdiel Points",
      city: "Trujillo Alto",
      province: "Keller",
      postal_code: "42451-8615",
      email: "Bell.Lockman79@hotmail.com",
      phone: "525.986.6733",
      id: 1
    },
    {
      created_at: "2023-08-01T07:40:50.333Z",
      updated_at: "2023-07-31T21:55:52.484Z",
      first_name: "Margaretta",
      last_name: "Spinka",
      address: "Doyle Burg",
      city: "West Haven",
      province: "West Jaylin",
      postal_code: "52703-1136",
      email: "Jared_Rice@yahoo.com",
      phone: "1-405-693-5925 x637",
      id: 2
    },
    {
      created_at: "2023-07-31T17:12:52.476Z",
      updated_at: "2023-08-01T06:06:32.130Z",
      first_name: "Jamey",
      last_name: "Littel",
      address: "Oberbrunner Island",
      city: "Anaheim",
      province: "Hegmanncester",
      postal_code: "51377-1834",
      email: "Coralie10@gmail.com",
      phone: "1-957-544-9373 x6989",
      id: 3
    },
    {
      created_at: "2023-07-31T15:52:20.707Z",
      updated_at: "2023-08-01T04:21:47.800Z",
      first_name: "Britney",
      last_name: "Becker",
      address: "Raoul Valley",
      city: "Placentia",
      province: "Haltom City",
      postal_code: "86381-0183",
      email: "Aurore_Fritsch@gmail.com",
      phone: "935-907-1494 x503",
      id: 4
    },
    {
      created_at: "2023-08-01T12:20:48.601Z",
      updated_at: "2023-07-31T23:22:34.349Z",
      first_name: "Carolina",
      last_name: "Lindgren",
      address: "Stracke Fork",
      city: "Glendale",
      province: "Stracketon",
      postal_code: "43542-3770",
      email: "Chelsey_Parker1@gmail.com",
      phone: "1-279-420-0590 x27081",
      id: 5
    },
    {
      created_at: "2023-07-31T16:04:17.392Z",
      updated_at: "2023-07-31T19:46:26.289Z",
      first_name: "Axel",
      last_name: "Padberg",
      address: "Reilly Pike",
      city: "Royal Oak",
      province: "Beatriceton",
      postal_code: "38663",
      email: "Jedidiah_Marvin7@yahoo.com",
      phone: "(626) 588-8273 x44089",
      id: 6
    },
    {
      created_at: "2023-07-31T14:23:52.576Z",
      updated_at: "2023-08-01T09:59:21.438Z",
      first_name: "Alisha",
      last_name: "Bogisich",
      address: "Ritchie Squares",
      city: "Haverhill",
      province: "North Nasir",
      postal_code: "20708",
      email: "Blanche_Watsica27@hotmail.com",
      phone: "591.738.6386 x4949",
      id: 7
    },
    {
      created_at: "2023-08-01T03:41:48.565Z",
      updated_at: "2023-07-31T19:12:43.268Z",
      first_name: "Devan",
      last_name: "Mertz",
      address: "Derick Rue",
      city: "Charlotte",
      province: "New Rachellecester",
      postal_code: "47717-0555",
      email: "Brannon98@gmail.com",
      phone: "758-694-9974",
      id: 8
    },
    {
      created_at: "2023-08-01T07:09:41.478Z",
      updated_at: "2023-07-31T16:01:06.408Z",
      first_name: "Coy",
      last_name: "Kulas",
      address: "Ferne Parkways",
      city: "Plantation",
      province: "Casperburgh",
      postal_code: "47618",
      email: "Webster11@hotmail.com",
      phone: "(473) 443-1229 x56644",
      id: 9
    },
    {
      created_at: "2023-08-01T04:52:09.192Z",
      updated_at: "2023-07-31T13:42:47.654Z",
      first_name: "Rocky",
      last_name: "Wisoky",
      address: "Josiane Coves",
      city: "Fountain Valley",
      province: "Jenniferton",
      postal_code: "55254",
      email: "Dahlia_Purdy69@gmail.com",
      phone: "1-963-739-8057 x69724",
      id: 10
    },
    {
      created_at: "2023-08-01T00:30:06.933Z",
      updated_at: "2023-08-01T04:19:37.723Z",
      first_name: "Mallory",
      last_name: "Kirlin",
      address: "Jody Islands",
      city: "Linden",
      province: "North Kiaracester",
      postal_code: "35654-7127",
      email: "Garth79@yahoo.com",
      phone: "(691) 445-8773 x3621",
      id: 11
    },
    {
      created_at: "2023-08-01T08:23:15.105Z",
      updated_at: "2023-07-31T14:59:46.400Z",
      first_name: "Cyrus",
      last_name: "Parker",
      address: "Lueilwitz Glens",
      city: "Homestead",
      province: "West Zane",
      postal_code: "28258-0489",
      email: "Jazmyne_Yost68@yahoo.com",
      phone: "510.944.4346",
      id: 12
    },
    {
      created_at: "2023-07-31T13:40:22.305Z",
      updated_at: "2023-07-31T17:34:17.335Z",
      first_name: "Flo",
      last_name: "Mertz",
      address: "Colin Isle",
      city: "Memphis",
      province: "Metairie",
      postal_code: "01103-1275",
      email: "Ariel.Klocko@gmail.com",
      phone: "210-218-8278",
      id: 13
    },
    {
      created_at: "2023-08-01T11:58:34.874Z",
      updated_at: "2023-08-01T09:28:25.465Z",
      first_name: "Jewel",
      last_name: "Schowalter",
      address: "Gabe Crossing",
      city: "Covina",
      province: "Fort Alfordmouth",
      postal_code: "48414-5393",
      email: "Jan_Collier@gmail.com",
      phone: "350-654-7914 x751",
      id: 14
    },
    {
      created_at: "2023-07-31T21:52:35.110Z",
      updated_at: "2023-07-31T15:45:20.651Z",
      first_name: "Percival",
      last_name: "Harris",
      address: "Wuckert Plaza",
      city: "East Lansing",
      province: "Lake Cathy",
      postal_code: "84660-6171",
      email: "Don.Rath@gmail.com",
      phone: "314.501.8829 x40964",
      id: 15
    },
    {
      created_at: "2023-08-01T11:13:02.749Z",
      updated_at: "2023-07-31T14:51:32.921Z",
      first_name: "Brooke",
      last_name: "Weber",
      address: "Esta Union",
      city: "Niagara Falls",
      province: "New Carmelborough",
      postal_code: "13658",
      email: "Marielle.Roberts@gmail.com",
      phone: "(385) 258-8866",
      id: 16
    },
    {
      created_at: "2023-07-31T15:40:44.509Z",
      updated_at: "2023-08-01T03:09:38.330Z",
      first_name: "Anabelle",
      last_name: "Mann",
      address: "Wava Row",
      city: "Stockton",
      province: "Bolingbrook",
      postal_code: "87760-0258",
      email: "Vella_Hegmann25@gmail.com",
      phone: "587.219.7364 x797",
      id: 17
    }
  ]
}

export default data;