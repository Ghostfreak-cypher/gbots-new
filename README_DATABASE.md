# Database Management for GROBOTS

This document explains how to manage your GROBOTS team database using the provided scripts.

## 🚀 Quick Start

### 1. Setup Environment Variables
Copy the environment variables from `env.example` to your `.env.local` file:

```bash
# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=dv0rm0k0r
CLOUDINARY_API_KEY=362822825989394
CLOUDINARY_API_SECRET=xahTTUB7B8N3dNTOo6_NXz8htxk

# MongoDB Configuration
MONGODB_URI=mongodb+srv://grobotsclub:uDzgEKVv3Be8Qt5k@main-website.7elkaai.mongodb.net/?retryWrites=true&w=majority&appName=Main-Website
```

### 2. Install Dependencies
```bash
npm install
```

## 📋 Available Scripts

### Database Seeding
```bash
npm run db:seed
```
- Seeds the database with team members from `src/data/team/teamData.js`
- Automatically uploads images to Cloudinary
- Updates existing members if they already exist
- Creates new members if they don't exist

### Database Wiping
```bash
npm run db:wipe
```
- Completely wipes the database clean
- Removes all collections
- Deletes all Cloudinary images
- ⚠️ **WARNING**: This will permanently delete all data!

### Database Reset
```bash
npm run db:reset
```
- Combines wipe + seed operations
- Wipes database clean and then seeds with fresh data
- ⚠️ **WARNING**: This will permanently delete all existing data!

### Add New Team Member
```bash
npm run db:add-member
```
- Interactive script to add new team members
- Updates `teamData.js` file automatically
- Prompts for all required information

## 🔄 Workflow for Managing Team Data

### Adding New Team Members

1. **Add member to teamData.js**:
   ```bash
   npm run db:add-member
   ```
   Follow the prompts to enter:
   - Name
   - Role
   - Department
   - Bio
   - Image path (e.g., `/2024 - 2025/member.jpg`)
   - Skills (comma-separated)
   - Achievements (comma-separated)
   - Social media links
   - Alumni status
   - Batch year

2. **Update database**:
   ```bash
   npm run db:seed
   ```

### Updating Existing Members

1. **Edit teamData.js** directly
2. **Run seeding script**:
   ```bash
   npm run db:seed
   ```
   The script will automatically detect changes and update existing members.

### Complete Database Reset

If you want to start fresh:
```bash
npm run db:reset
```

## 📁 File Structure

```
src/
├── data/
│   └── team/
│       └── teamData.js          # Team member data
├── models/
│   └── TeamMember.js            # Database model
├── scripts/
│   ├── seedDatabase.js          # Database seeding script
│   ├── wipeDatabase.js          # Database wiping script
│   └── addTeamMember.js         # Add new member script
└── lib/
    ├── db.js                    # Database connection
    └── cloudinary.js            # Cloudinary configuration
```

## 🗄️ Database Schema

Each team member has the following structure:

```javascript
{
  name: String,           // Required
  role: String,           // Required
  department: String,      // Required
  bio: String,            // Required
  image: String,          // Required (Cloudinary URL)
  skills: [String],       // Array of skills
  achievements: [String],  // Array of achievements
  social: {
    email: String,
    linkedin: String,
    github: String,
    instagram: String
  },
  isAlumni: Boolean,      // Required
  batch: String,          // Required (e.g., "2024")
  isActive: Boolean,      // Required
  timestamps: true        // Created/updated timestamps
}
```

## ☁️ Cloudinary Integration

- Images are automatically uploaded to Cloudinary
- Stored in `grobots/team-members` folder
- Optimized with auto quality and format
- Public IDs follow pattern: `grobots-member-name`

## 🚨 Important Notes

1. **Backup**: Always backup your data before running wipe/reset scripts
2. **Environment Variables**: Ensure Cloudinary credentials are properly set
3. **Image Paths**: Use relative paths from the `public` folder
4. **Database Connection**: Ensure MongoDB is accessible
5. **Cloudinary Quota**: Be mindful of Cloudinary upload limits

## 🔧 Troubleshooting

### Cloudinary Upload Errors
- Check API credentials in environment variables
- Verify image files exist in the specified paths
- Check Cloudinary account limits and quotas

### Database Connection Issues
- Verify MongoDB connection string
- Check network connectivity
- Ensure MongoDB service is running

### Script Execution Errors
- Ensure all dependencies are installed
- Check file permissions
- Verify Node.js version compatibility

## 📞 Support

If you encounter issues:
1. Check the console output for error messages
2. Verify environment variables are set correctly
3. Ensure all required files exist in the correct locations
4. Check MongoDB and Cloudinary service status

## 🎯 Best Practices

1. **Regular Backups**: Export database data regularly
2. **Version Control**: Keep teamData.js in version control
3. **Testing**: Test scripts on development data first
4. **Documentation**: Update team information regularly
5. **Image Optimization**: Use appropriate image formats and sizes
