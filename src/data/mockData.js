export const mockData = {
    orgA: {
      leads: [
        { id: 1, name: "Rahul", phone: "9999999999", status: "New" },
        { id: 2, name: "Amit", phone: "8888888888", status: "Contacted" }
      ],
      calls: [
        {
          id: 1,
          lead: "Rahul",
          time: "10:00 AM",
          duration: "2 min",
          outcome: "Interested"
        }
      ]
    },
  
    orgB: {
      leads: [
        { id: 1, name: "John", phone: "7777777777", status: "New" }
      ],
      calls: [
        {
          id: 1,
          lead: "John",
          time: "11:30 AM",
          duration: "5 min",
          outcome: "Follow-up"
        }
      ]
    }
  };
  