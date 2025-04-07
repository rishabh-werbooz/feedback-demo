import { frequencyTypes } from "../..";
import { Organization } from "../entities/Organization";
import { serverUrl } from "../lib/config";


export const fetchOrganizationData = async ({ organizationId,websiteId, source = "feedback", page = 1 }: { websiteId:string,organizationId: string; source?: string; page?: number }) => {

  // const dummyData: Organization[] = [
  //     {
  //       id: "1", //formid
  //       name: "Organization One",
  //       title:"Submit feedback",
  //       description: "Sample organization",
  //       metadata: {
  //         title: "First Form",
  //         description:"This is my first form",
  //         openAfter: 1,
  //         theme: "system",
  //         primaryColor: "#39C3EF",
  //         whiteLabel: false,
  //         frequency: frequencyTypes.everyTime
  //         },
  //       allowed_urls: ["/"],
  //     },
  //     {
  //       id: "2",
  //       name: "Organization Two",
  //       title:"Submit feedback",
  //       description: "Another organization",
  //       metadata: {
  //         title: "Second Form",
  //         description:"This is my second form",
  //             openAfter: 1,
  //             theme:"light",
  //             primaryColor: "red",
  //             whiteLabel:false,
  //             frequency: frequencyTypes.everySession
  //        },
  //       allowed_urls: ["/about"],
  //     },
  //     {
  //         id: "3",
  //         name: "Organization Two",
  //         title:"Submit feedback",
  //         description: "Another organization",
  //       metadata: {
  //         title: "Third Form",
  //         description:"This is my third form",
  //               openAfter: 1,
  //               theme:"dark",
  //               primaryColor: "#1753EE",
  //               whiteLabel:true,
  //               frequency: frequencyTypes.everyTime
  //          },
  //         allowed_urls: ["/services"],
  //     },
  // ];

  // const orgData = dummyData.filter(org => org.id === organizationId);

  const url = serverUrl + `/feedback?id=${organizationId}&type=${source}&page=${page}&website_id=${websiteId}`
  const res = await fetch(url)

  const result = await res.json()
  if (source === "newsfeed") {
    return result
  }
  return result?.data ?? []
}