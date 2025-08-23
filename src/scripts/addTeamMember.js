import fs from 'fs';
import path from 'path';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to ask user for input
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

// Function to add new team member
async function addTeamMember() {
  try {
    console.log('👥 Adding New Team Member to teamData.js\n');
    
    // Get member details from user
    const name = await askQuestion('Enter member name: ');
    const role = await askQuestion('Enter member role: ');
    const department = await askQuestion('Enter department: ');
    const bio = await askQuestion('Enter bio: ');
    const imagePath = await askQuestion('Enter image path (e.g., /2024 - 2025/member.jpg): ');
    
    // Get skills (comma-separated)
    const skillsInput = await askQuestion('Enter skills (comma-separated): ');
    const skills = skillsInput.split(',').map(skill => skill.trim());
    
    // Get achievements (comma-separated)
    const achievementsInput = await askQuestion('Enter achievements (comma-separated): ');
    const achievements = achievementsInput.split(',').map(achievement => achievement.trim());
    
    // Get social links
    const linkedin = await askQuestion('Enter LinkedIn URL (or # for none): ');
    const github = await askQuestion('Enter GitHub URL (or # for none): ');
    const instagram = await askQuestion('Enter Instagram URL (or # for none): ');
    
    // Get alumni status
    const isAlumniInput = await askQuestion('Is this member an alumni? (yes/no): ');
    const isAlumni = isAlumniInput.toLowerCase() === 'yes';
    
    const batch = await askQuestion('Enter batch year (e.g., 2024): ');
    
    // Create new member object
    const newMember = {
      id: Date.now(), // Generate unique ID
      name,
      role,
      department,
      bio,
      image: imagePath,
      skills,
      achievements,
      social: {
        email: "",
        linkedin: linkedin || "#",
        github: github || "#",
        instagram: instagram || "#",
      },
      isAlumni,
      batch,
    };
    
    // Read current teamData.js file
    const teamDataPath = path.join(process.cwd(), 'src', 'data', 'team', 'teamData.js');
    let fileContent = fs.readFileSync(teamDataPath, 'utf8');
    
    // Find the members array and add new member
    const membersArrayStart = fileContent.indexOf('members: [');
    if (membersArrayStart === -1) {
      throw new Error('Could not find members array in teamData.js');
    }
    
    // Find the end of the last member object
    const lastMemberEnd = fileContent.lastIndexOf('},');
    if (lastMemberEnd === -1) {
      throw new Error('Could not find last member in teamData.js');
    }
    
    // Insert new member before the closing bracket
    const newMemberString = `,\n      ${JSON.stringify(newMember, null, 6).replace(/"/g, '')}`;
    const insertPosition = lastMemberEnd + 2;
    
    const newFileContent = 
      fileContent.slice(0, insertPosition) + 
      newMemberString + 
      fileContent.slice(insertPosition);
    
    // Write updated content back to file
    fs.writeFileSync(teamDataPath, newFileContent, 'utf8');
    
    console.log('\n✅ New team member added successfully!');
    console.log(`📝 Added: ${name} (${role})`);
    console.log('\n🔄 You can now run "npm run db:seed" to update the database');
    
    rl.close();
    
  } catch (error) {
    console.error('❌ Error adding team member:', error.message);
    rl.close();
    process.exit(1);
  }
}

// Run the function
addTeamMember();
