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
                primaryColor:"#39C3EF"
            },
          allowed_urls: ["/about", "/"],
        },
        {
          id: "2",
          name: "Organization Two",
          description: "Another organization",
            metadata: {
                openAfter: 10,
                theme:"system",
                primaryColor:"red"
           },
          allowed_urls: ["/services"],
        },
    ];
    
  const orgData = dummyData.filter(org => org.id === organizationId);

    return orgData
}