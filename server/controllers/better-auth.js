// Get user profile
exports.getProfile = async (req, res) => {
  try {
    res.json({
      success: true,
      user: {
        id: req.user.id,
        email: req.user.email,
        name: req.user.name,
        image: req.user.image,
      },
    });
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch profile",
    });
  }
};

// Update user profile
exports.updateProfile = async (req, res) => {
  try {
    const { name } = req.body;
    
    // Update user logic here
    // This is simplified - you'd want to use Better Auth's update methods
    
    res.json({
      success: true,
      message: "Profile updated successfully",
    });
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update profile",
    });
  }
};

// Get dashboard data
exports.getDashboard = async (req, res) => {
  try {
    res.json({
      success: true,
      data: {
        user: req.user,
        stats: {
          // Your dashboard data
        },
      },
    });
  } catch (error) {
    console.error("Get dashboard error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard data",
    });
  }
};