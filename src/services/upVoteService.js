export const renderUpVoteButton = (profile, project) => {
  if (profile.upVoted.includes(project.id)) return "favorite";
  else return "favorite_border";
};

export const handleUpVote = (project, props) => {
  // If its your project you can't upvote it
  if (project.authorId === props.auth.uid) return;

  const upVotedProject = { ...project };
  upVotedProject.upVote++;
  //   If you already upvoted project you cant upvote it again
  if (!props.profile.upVoted.includes(project.id)) {
    props.upVoteProject(upVotedProject);
    props.addUpVotedProject(project.id);
  }
};

export default {
  renderUpVoteButton,
  handleUpVote,
};
