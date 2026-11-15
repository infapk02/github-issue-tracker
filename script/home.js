// variables
const allBtn = document.querySelector("#allBtn");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closedBtn");

let allIssues = [];

// fetch all issues
const fetchAllIssues = () => {
  fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues`)
    .then((res) => res.json())
    .then((data) => {
      allIssues = data.data;
      displayAllIssues(allIssues);
    });
};

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

// displayAllIssues
allBtn.addEventListener("click", () => {
  displayAllIssues(allIssues);
  activeBtn(allBtn);
});

// displayOpenIssues
openBtn.addEventListener("click", () => {
  const openIssues = allIssues.filter((issue) => {
    return issue.status === "open";
  });

  displayAllIssues(openIssues);
  activeBtn(openBtn);
});

// displayClosedIssues
closeBtn.addEventListener("click", () => {
  const closedIssues = allIssues.filter((issue) => {
    return issue.status === "closed";
  });

  displayAllIssues(closedIssues);

  activeBtn(closeBtn);
});

// display all issues
const displayAllIssues = (issues) => {
  const issueContainer = document.querySelector("#issueContainer");
  issueContainer.innerHTML = ``;

  if (issues.length) {
    issues.forEach((issue) => {
      issueContainer.innerHTML += `
        <!-- card -->
          <div class="card border-t-4 h-fit rounded-md shadow-md ${issue.status === "open" ? "border-green-500" : "border-indigo-600"}">
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
