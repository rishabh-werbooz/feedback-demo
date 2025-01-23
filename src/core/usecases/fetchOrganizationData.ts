import { Organization } from "../entities/Organization";

export const fetchOrganizationData = ({ organizationId }:{organizationId:string}) => {

    const dummyData: Organization[] = [
        {
          id: "1",
          name: "Organization One",
          title:"Submit feedback",
          description: "Sample organization",
            metadata: {
                openAfter: 5,
                theme: "system",
                primaryColor: "#39C3EF",
                whiteLabel:false
            },
          allowed_urls: ["/"],
        },
        {
          id: "2",
          name: "Organization Two",
          title:"Submit feedback",
          description: "Another organization",
            metadata: {
                openAfter: 10,
                theme:"light",
                primaryColor: "red",
                whiteLabel:false
           },
          allowed_urls: ["/about"],
        },
        {
            id: "3",
            name: "Organization Two",
            title:"Submit feedback",
            description: "Another organization",
              metadata: {
                  openAfter: 2,
                  theme:"dark",
                  primaryColor: "#1753EE",
                  whiteLabel:true
             },
            allowed_urls: ["/services"],
        },
    ];
    
  // const orgData = dummyData.filter(org => org.id === organizationId);

    return dummyData
}