import { Organization } from "../entities/Organization";

export const fetchOrganizationData = ({ organizationId }:{organizationId:string}) => {

    const dummyData: Organization[] = [
        {
          id: "1",
          name: "Organization One",
          description: "Sample organization",
            metadata: {
                openAfter: 5,
                theme: "system",
                primaryColor: "#39C3EF",
                whiteLabel:true
            },
          allowed_urls: ["/"],
        },
        {
          id: "2",
          name: "Organization Two",
          description: "Another organization",
            metadata: {
                openAfter: 10,
                theme:"light",
                primaryColor: "red",
                whiteLabel:true
           },
          allowed_urls: ["/services"],
        },
        {
            id: "3",
            name: "Organization Two",
            description: "Another organization",
              metadata: {
                  openAfter: 2,
                  theme:"dark",
                  primaryColor: "#1753EE",
                  whiteLabel:false
             },
            allowed_urls: ["/about"],
        },
        {
            id: "4",
            name: "Organization Two",
            description: "Another organization",
              metadata: {
                  openAfter: 1,
                  theme:"light",
                  primaryColor: "#1753EE",
                  whiteLabel:false
             },
            allowed_urls: ["/about"],
          },
    ];
    
  const orgData = dummyData.filter(org => org.id === organizationId);

    return orgData
}