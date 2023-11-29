/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {protocol:'https',hostname:'avatars.githubusercontent.com'},
            {protocol:'https', hostname:'scontent.facc1-1.fna.fbcdn.net'}
        ]
    }
}

module.exports = nextConfig
