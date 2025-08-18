export default function handler(req, res) {
  res.status(200).json({
    sha: process.env.VERCEL_GIT_COMMIT_SHA || 'local',
    branch: process.env.VERCEL_GIT_COMMIT_REF || '',
    deployedAt: new Date().toISOString()
  });
}
