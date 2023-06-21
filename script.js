var projectLinks = document.getElementsByClassName('project-link');
var projectInfos = document.getElementsByClassName('project-info');

for (var i = 0; i < projectLinks.length; i++) {
    (function(index) {
        projectLinks[index].onclick = function() {
            var projectInfo = projectInfos[index];
            if (projectInfo.style.display === 'none') {
                projectInfo.style.display = 'block';
            } else {
                projectInfo.style.display = 'none';
            }
        };
    })(i);
}
