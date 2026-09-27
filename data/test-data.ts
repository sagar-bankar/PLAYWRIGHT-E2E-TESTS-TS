export default class TestData {
  static makeAppointmentTestData() {
    return [
      {
        testId: "TC001",
        facility: "Tokyo CURA Healthcare Center",
        hcp: "Medicare",
        visitDt: "22/9/2026",
      },
      {
        testId: "TC002",
        facility: "Hongkong CURA Healthcare Center",
        hcp: "Medicaid",
        visitDt: "23/9/2026",
      },
      {
        testId: "TC003",
        facility: "Seoul CURA Healthcare Center",
        hcp: "None",
        visitDt: "24/9/2026",
      },
    ];
  }
}
