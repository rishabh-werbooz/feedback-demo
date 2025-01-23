import { frequencyTypes } from "../..";
import { Organization } from "../entities/Organization";

export const fetchOrganizationData = ({ organizationId }:{organizationId:string}) => {

    const dummyData: Organization[] = [
        {
          id: "1", //formid
          name: "Organization One",
          title:"Submit feedback",
          description: "Sample organization",
            metadata: {
                openAfter: 1,
                theme: "system",
                primaryColor: "#39C3EF",
                whiteLabel: false,
                frequency: frequencyTypes.oneTime
            },
          allowed_urls: ["/"],
        },
        {
          id: "2",
          name: "Organization Two",
          title:"Submit feedback",
          description: "Another organization",
            metadata: {
                openAfter: 1,
                theme:"light",
                primaryColor: "red",
                whiteLabel:false,
                frequency: frequencyTypes.everySession
           },
          allowed_urls: ["/about"],
        },
        {
            id: "3",
            name: "Organization Two",
            title:"Submit feedback",
            description: "Another organization",
              metadata: {
                  openAfter: 1,
                  theme:"dark",
                  primaryColor: "#1753EE",
                  whiteLabel:true,
                  frequency: frequencyTypes.everyTime
             },
            allowed_urls: ["/services"],
        },
    ];
    
  // const orgData = dummyData.filter(org => org.id === organizationId);

    return dummyData
}