import TestData from "../data/test-data";


const makeAppTestData=TestData.makeAppointmentTestData()

//Access the data
for(const appData of makeAppTestData)
{

    console.log(`>> Test Data: ${JSON.stringify(appData)}`);
}
