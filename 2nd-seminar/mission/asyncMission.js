const members = require('../members');

const getOnline = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const onlineMembers = members.filter((m) => m.location === 'online');
      resolve(onlineMembers);
    }, 500);
  });
};

const getOffline = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const offlineMembers = members.filter((m) => m.location === 'offline');
      resolve(offlineMembers);
    }, 500);
  });
};

const getYB = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const YBMembers = members.filter((m) => m.group === 'YB');
      resolve(YBMembers);
    }, 500);
  });
};

const getOB = (members) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const OBMembers = members.filter((m) => m.group === 'OB');
      resolve(OBMembers);
    }, 500);
  });
};

/* promise then*/

// getOnline(members)
//   .then(getOB)
//   .then(console.log)
//   .catch((error) => console.error(error));
// getYB(members)
//   .then(getOffline)
//   .then(console.log)
//   .catch((error) => console.error(error));

/* async await */
const seminar1 = async (members) => {
  const checkLocation = await getOnline(members);
  const checkOnline = await getOB(checkLocation);
  console.log(checkOnline);
};
const seminar2 = async (members) => {
  const checkOnline = await getYB(members);
  const checkLocation = await getOffline(checkOnline);
  console.log(checkLocation);
};

seminar1(members);
seminar2(members);
