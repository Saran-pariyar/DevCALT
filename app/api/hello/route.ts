/*
type object_type = {
    Name: String,
    Age: Number
}

const obj : object_type = {Name: "Saran", Age: 20}

export async function GET(request: Request) {
    return new Response(`{
        "data": {
          "Name": "Saran",
          "Age": 20,
          "Address": {
            "Street": "123 Main St",
            "City": "Anytown",
            "State": "CA",
            "ZipCode": "12345"
          },
          "Contacts": [
            {
              "Type": "Email",
              "Value": "saran@example.com"
            },
            {
              "Type": "Phone",
              "Value": "+1 (555) 123-4567"
            }
          ],
          "Hobbies": ["Reading", "Coding", "Traveling"]
        }
      }`)
  }

  */