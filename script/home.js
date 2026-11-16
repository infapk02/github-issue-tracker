// variables
const allBtn = document.querySelector("#allBtn");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closedBtn");
const searchInput = document.querySelector("#searchedText");

let allIssues = [];
let currentStatus = "all";

// fetch all issues
const fetchAllIssues = () => {
  showLoadingSpinner();

  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues`)
    .then((res) => res.json())
    .then((data) => {
      allIssues = data.data;
      displayAllIssues(allIssues);
    });
};

// fetch single issue
const fetchSingleIssue = (id) => {
  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
    .then((res) => res.json())
    .then((data) => displayModal(data.data));
};

// loading spinner
const showLoadingSpinner = () => {
  const issueContainer = document.querySelector("#issueContainer");

  issueContainer.innerHTML = `
    <div class="flex justify-center items-center py-20 col-span-full">
      <span class="loading loading-bars loading-xl text-indigo-600"></span>
    </div>
  `;
};

// filter issues
const filterIssues = () => {
  const searchText = searchInput.value.toLowerCase().trim();

  let filteredIssues = allIssues.filter((issue) => {
    const matchesStatus = currentStatus === "all" || issue.status === currentStatus;

    const matchesSearch =
      issue.title.toLowerCase().includes(searchText) || issue.description.toLowerCase().includes(searchText);

    return matchesSearch && matchesStatus;
  });

  displayAllIssues(filteredIssues);
};

// active button functionalities
const activeBtn = (btn) => {
  allBtn.classList.remove("bg-indigo-600", "text-white");
  openBtn.classList.remove("bg-indigo-600", "text-white");
  closeBtn.classList.remove("bg-indigo-600", "text-white");

  allBtn.classList.add("hover:bg-gray-100");
  openBtn.classList.add("hover:bg-gray-100");
  closeBtn.classList.add("hover:bg-gray-100");

  btn.classList.add("bg-indigo-600", "text-white");
  btn.classList.remove("hover:bg-gray-100");
};

// search functionalities
searchInput.addEventListener("input", () => {
  filterIssues();
});

const displayModal = (data) => {
  const myModal = document.querySelector("#myModal");
  const modalBox = document.querySelector("#modalContent");

  modalBox.innerHTML = ``;
  modalBox.innerHTML = `
          <!-- heading -->
          <h3 class="text-lg font-bold">${data.title}</h3>

          <!-- status -->
          <div class="flex gap-6 items-center">
            <p class="px-4 py-1 rounded-full w-fit capitalize text-white mt-1 ${data.status === "open" ? "bg-green-500" : "bg-indigo-600"}">${data.status}</p>

            <ul class="list-disc flex items-center space-x-8">
              <li class="capitalize">open by ${data.author}</li>
              <li class="capitalize">${data.createdAt.slice(0, 9)}</li>
            </ul>
          </div>

          <!-- labels -->
          <div class="flex items-center gap-2">
            
            ${data.labels
              .map((label) => {
                return `${label !== "," ? `<p class="uppercase rounded-full px-5 ${label === "bug" ? "text-white bg-red-500" : label === "enhancement" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}">${label}</p>` : ` `}`;
              })
              .join("")}
          </div>

          <!-- description -->
          <p class="text-gray-500 capitalize">
            ${data.description}
          </p>

          <!-- info -->
          <div class="flex items-center gap-3">
            <div class="py-4 bg-gray-200 flex-1 px-2 rounded-md">
              <p>Assignee:</p>
              <h4>${data.author}</h4>
            </div>

            <div class="py-4 bg-gray-200 flex-1 px-2 rounded-md">
              <p class="capitalize">priority:</p>
              <h4 class="px-5 rounded-full capitalize w-fit ${data.priority === "high" ? "bg-red-200 text-red-500" : data.priority === "medium" ? "bg-yellow-200 text-yellow-600" : "bg-gray-400 text-gray-700"}">${data.priority}</h4>
            </div>
          </div>
  `;

  myModal.showModal();
};

// displayAllIssues
allBtn.addEventListener("click", () => {
  currentStatus = "all";
  activeBtn(allBtn);
  // displayAllIssues(allIssues);
  filterIssues();
});

// displayOpenIssues
openBtn.addEventListener("click", () => {
  // const openIssues = allIssues.filter((issue) => {
  //   return issue.status === "open";
  // });

  currentStatus = "open";
  activeBtn(openBtn);
  // displayAllIssues(openIssues);
  filterIssues();
});

// displayClosedIssues
closeBtn.addEventListener("click", () => {
  // const closedIssues = allIssues.filter((issue) => {
  //   return issue.status === "closed";
  // });

  currentStatus = "closed";
  activeBtn(closeBtn);
  // displayAllIssues(closedIssues);
  filterIssues();
});

// display all issues
const displayAllIssues = (issues) => {
  const issueContainer = document.querySelector("#issueContainer");
  issueContainer.innerHTML = ``;

  if (issues.length) {
    issues.forEach((issue) => {
      issueContainer.innerHTML += `
        <!-- card -->
          <div id="${issue.id}" onclick="fetchSingleIssue(${issue.id})" class="card border-t-4 h-fit rounded-md shadow-md hover:cursor-pointer ${issue.status === "open" ? "border-green-500" : "border-indigo-600"}">
            <!-- upper -->
            <div class="space-y-6 p-4">
              <!-- priority -->
              <div class="flex items-center justify-between">
                <!-- left -->
                ${
                  issue.status === "open"
                    ? `<div class="w-7 h-7 rounded-full bg-green-200 flex justify-center items-center">
                      <div class="w-5 h-5 rounded-full border-green-600 border-2 border-dashed"></div>
                    </div>`
                    : `<div class="w-7 h-7 rounded-full bg-indigo-200 flex justify-center items-center">
                      <i class="fa-regular fa-circle-check text-indigo-600"></i>
                    </div>`
                }
                <!-- right -->
                <div class="px-4 py-0.5 rounded-full ${issue.priority === "high" ? "bg-red-200" : issue.priority === "medium" ? "bg-yellow-200" : "bg-gray-200"}">
                  <p class="capitalize ${issue.priority === "high" ? "text-red-500" : issue.priority === "medium" ? "text-yellow-600" : "text-gray-500"}">${issue.priority}</p>
                </div>
              </div>
              <!-- title & subtitle -->
              <div class="space-y-2">
                <h2 class="text-2xl">${issue.title}</h2>
                <p class="text-gray-500 leading-none">
                  ${issue.description}
                </p>
              </div>
              <!-- labels -->
              <div class="flex gap-2">
                ${issue.labels
                  .map((label) => {
                    return `${
                      label !== ","
                        ? `<div class="px-4 py-0.5 rounded-full bg-red-200">
                        <p class="capitalize">${label}</p>
                      </div>`
                        : ` `
                    }`;
                  })
                  .join("")}
              </div>
            </div>
            <!-- lower -->
            <div class="py-4 border-t-2 px-4 border-gray-200 mt-5">
              <p class="capitalize font-medium text-gray-500">#1 by ${issue.author}</p>
              <p class="capitalize font-medium text-gray-500">${issue.createdAt}</p>
            </div>
          </div>
      `;
    });
  }
};

// functions calls
fetchAllIssues();
activeBtn(allBtn);
