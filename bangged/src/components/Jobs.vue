<template>
  <div>
    <span @click="jobsModal = true">
      <Poptip trigger="hover" content="Smash me!" placement="bottom">
        <h3>Companies I have worked <Icon type="ios-at-outline" /></h3>
      </Poptip>
    </span>
    <Modal
      v-model="jobsModal"
      scrollable
      title="Job History"
      ok-text="Great!"
      cancel-text="Not Impressed!"
    >
      <Timeline>
        <TimelineItem color="green">
          <p class="time">
            <Poptip
              trigger="hover"
              title="Full Stack Developer"
              content="content"
              placement="right-start"
            >
              2019
              <Icon class="moreInfo" type="ios-information-circle-outline" />
              <div slot="content">
                <div>
                  <ul>
                    <li>
                      • Wrote Complex Stored Procedures, Indexes, Functions and
                      User Defined Functions.
                    </li>
                    <li>• Implemented REST API End Points.</li>
                    <li>• Wrote some new .Net Micro Service.</li>
                    <li>• Used Vue Js and iView for SPA.</li>
                    <li>• Wrote BDD(Cucumber) Test.</li>
                    <li>
                      • Used Agile Methodologies and Participated in SCRUM
                      Meetings.
                    </li>
                  </ul>
                </div>
              </div>
            </Poptip>
          </p>
          <p class="content">
            <img src="../assets/deltax.png" class="companyLogo" />
          </p>
        </TimelineItem>
        <TimelineItem colo="blue">
          <p class="time">
            <Poptip
              trigger="hover"
              title="Android App Developer - (Intern)"
              content="content"
              placement="right-start"
            >
              2018
              <Icon class="moreInfo" type="ios-information-circle-outline" />
              <div slot="content">
                <ul>
                  <li>
                    • Home Automation Project with Arduino Bluetooth Connection.
                  </li>
                  <li>
                    • An App which can scan Patient QR to display certain
                    results from cloud.
                  </li>
                </ul>
              </div>
            </Poptip>
          </p>
          <img src="../assets/pointerTechnos.png" class="pointerTechnosLogo" />
          <p class="content">Pointer Technos</p>
        </TimelineItem>
        <TimelineItem color="red">
          <p class="time">
            <Poptip
              trigger="hover"
              title="Virtual Machine - Intern"
              content="content"
              placement="right-start"
            >
              2017
              <Icon class="moreInfo" type="ios-information-circle-outline" />
              <div slot="content">
                <ul>
                  <li>• Stock Inventory-SAP</li>
                  <li>
                    • Handled the Physical Inventory in the process of Material
                    Management.
                  </li>
                  <li>
                    • Created Vouchers for sending an inventory to another
                    geographical location.
                  </li>
                  <li>• Virtual Machine Installation.</li>
                  <li>
                    • Manual Attendance Punch in for the Employee Attendance
                    System.
                  </li>
                </ul>
              </div>
            </Poptip>
          </p>
          <p class="content">
            <img src="../assets/cremica.png" class="companyLogo" />
          </p>
        </TimelineItem>
        <TimelineItem color="blue">
          <p class="time">
            <Poptip
              word-wrap
              width="400"
              trigger="hover"
              title="IT - Intern"
              content="content"
              placement="right-start"
            >
              2016
              <Icon class="moreInfo" type="ios-information-circle-outline" />
              <div slot="content">
                Developing a Local Area Network System and implementing it in
                various plants and gave the permissions to a set of specific
                users.
              </div>
            </Poptip>
          </p>
          <p class="content">
            <img src="../assets/pepsi.png" class="companyLogo" />
          </p>
        </TimelineItem>
      </Timeline>
    </Modal>
    <Modal
      v-model="feedbackModal"
      title="Feedback"
      ok-text="Send"
      cancel-text="Cancel"
    >
    </Modal>
  </div>
</template>
<script>
import { Icon, Modal, Timeline, TimelineItem } from "view-design";

//import VuePerfectScrollbar from "vue-perfect-scrollbar";

export default {
  name: "Jobs",
  components: {
    Icon,
    Modal,
    Timeline,
    TimelineItem
  },
  data() {
    return {
      jobsModal: false,
      feedbackModal: false
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.time {
  font-size: 14px;
  font-weight: bold;
}
.content {
  padding-left: 5px;
}
.companyLogo {
  height: 50px;
}
.pointerTechnosLogo {
  height: 50px;
  width: 100px;
}
.moreInfo {
  margin-left: 5px;
}
h3 {
  color: #c8c8c8;
}
</style>
