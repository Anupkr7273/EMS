const employees= [
      {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Prepare report",
            "description": "Monthly sales report",
            "date": "2025-04-10",
            "category": "Reporting",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Client follow-up",
            "description": "Call client regarding Q2 budget",
            "date": "2025-04-11",
            "category": "Client Management",
            "active": true,
            "new_task": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Team meeting",
            "description": "Weekly sync with the marketing team",
            "date": "2025-04-12",
            "category": "Meetings",
            "active": false,
            "new_task": false,
            "completed": true,
            "failed": false
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Update website",
            "description": "Change homepage banner",
            "date": "2025-04-09",
            "category": "Development",
            "active": false,
            "new_task": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Bug fixing",
            "description": "Resolve issue in checkout flow",
            "date": "2025-04-11",
            "category": "Development",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Code review",
            "description": "Review teammate’s PRs",
            "date": "2025-04-12",
            "category": "Code Review",
            "active": true,
            "new_task": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Deploy release",
            "description": "Deploy v1.4 to production",
            "date": "2025-04-13",
            "category": "DevOps",
            "active": false,
            "new_task": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Write blog post",
            "description": "Topic: AI Trends in 2025",
            "date": "2025-04-08",
            "category": "Content",
            "active": false,
            "new_task": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Social media audit",
            "description": "Evaluate Q1 performance",
            "date": "2025-04-10",
            "category": "Marketing",
            "active": false,
            "new_task": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Campaign planning",
            "description": "Plan summer ad campaign",
            "date": "2025-04-15",
            "category": "Marketing",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Inventory check",
            "description": "Audit warehouse stock",
            "date": "2025-04-11",
            "category": "Logistics",
            "active": true,
            "new_task": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Supplier meeting",
            "description": "Discuss pricing with supplier X",
            "date": "2025-04-12",
            "category": "Procurement",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Order processing",
            "description": "Process all orders from April 10",
            "date": "2025-04-13",
            "category": "Operations",
            "active": false,
            "new_task": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Failed delivery review",
            "description": "Investigate failed delivery logs",
            "date": "2025-04-14",
            "category": "Operations",
            "active": false,
            "new_task": false,
            "completed": false,
            "failed": true
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
          {
            "title": "Performance review",
            "description": "Conduct peer reviews",
            "date": "2025-04-10",
            "category": "HR",
            "active": true,
            "new_task": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Recruitment screening",
            "description": "Screen resumes for open roles",
            "date": "2025-04-11",
            "category": "Recruitment",
            "active": true,
            "new_task": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Training session",
            "description": "Organize leadership training",
            "date": "2025-04-15",
            "category": "Learning & Development",
            "active": false,
            "new_task": false,
            "completed": true,
            "failed": false
          }
        ]
      }
    ]

const admin= {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  
export const setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage =()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))

    return {admin,employees}
    
}