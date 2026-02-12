import { useState, useEffect } from 'react'
import { ChevronUp, Plus, Minus, Battery, Compass, KeyRound, HeartHandshake, Crown, Mountain, Rainbow, Eye, ArrowRightLeft, TreePine, Rocket, Hourglass } from 'lucide-react'

interface TeamMember {
  name: string
  contribution: string
}

interface Retreat {
  name: string
  desc: string
  fullDescription: string
  team: TeamMember[]
}

interface Theme {
  id: number
  title: string
  subtitle: string
  icon: typeof Battery
  retreats: Retreat[]
}

export function TeamPage() {
  const [scrollY, setScrollY] = useState(0)
  const [openTheme, setOpenTheme] = useState<number | null>(null)
  const [openRetreat, setOpenRetreat] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const showBackToTop = scrollY > 400

  const themes: Theme[] = [
    {
      id: 1,
      title: "Theme 1: The Reset",
      subtitle: "For people running on fumes who've forgotten what rest even feels like.",
      icon: Battery,
      retreats: [
        {
          name: "The Great Unplugging",
          desc: "Three days of digital detox, nervous system regulation, and recalibration.",
          fullDescription: "Three days of digital detox, nervous system regulation, and recalibration. No phones, no email — just the biology of burnout, somatic grounding, and the sound of your own thinking again. Jenna leads the medical dimension: what cortisol and chronic stress are actually doing to participants' brains and bodies, and how to intervene with nutrition, supplements, and lifestyle medicine. Rob leads the psychological dimension: nervous system education, EMDR for stuck stress patterns, and somatic practices that help the body remember what \"off\" feels like. Dan provides the meaning-making framework — why rest feels so hard, and how logotherapy's concept of meaningful suffering can paradoxically give people permission to stop suffering pointlessly. Mike runs morning movement and evening integration, helping participants translate insight into sustainable daily practices. Z facilitates the digital detox process itself: how to actually put down the phone, sit with the discomfort, and reconnect with inner quiet — drawing from his \"Inner Care\" framework.",
          team: [
            { name: "Jenna", contribution: "Biology of burnout, cortisol education, nutritional intervention, lifestyle medicine" },
            { name: "Rob", contribution: "Nervous system regulation, EMDR for stuck stress, somatic practices, clinical anchoring" },
            { name: "Dan", contribution: "Logotherapy on rest and meaning, permission frameworks, group facilitation" },
            { name: "Mike", contribution: "Morning movement, evening integration, sustainable practice coaching" },
            { name: "Z", contribution: "Digital detox facilitation, Inner Care practices, sitting with discomfort, inner quiet" }
          ]
        },
        {
          name: "Restore: A Weekend for the Chronically Over-Functioning",
          desc: "You hold everything together for everyone else. This retreat is where you put it down.",
          fullDescription: "You hold everything together for everyone else. This retreat is where you put it down. Explore what \"enough\" means, meet the inner parts that won't let you stop, and leave with a wellness protocol and a new definition of success. Rob leads IFS (Internal Family Systems) work to identify and work with the inner parts driving the over-functioning — the managers, the protectors, the ones who learned that love meant labor. Jenna provides comprehensive wellness assessments and creates individualized protocols addressing sleep, nutrition, hormonal health, and adrenal function. Dan offers the logotherapy lens on achievement, success, and the cultural forces that make over-functioning feel mandatory. Mike brings his coaching methodology for redesigning life — because over-functioning is often a structure problem as much as a psychology problem. Z leads daily settling practices and helps participants build a relationship with stillness.",
          team: [
            { name: "Rob", contribution: "IFS parts work, inner managers and protectors, clinical depth" },
            { name: "Jenna", contribution: "Comprehensive wellness assessment, individualized protocols, adrenal and hormonal support" },
            { name: "Dan", contribution: "Logotherapy on achievement and success, cultural critique of over-functioning" },
            { name: "Mike", contribution: "Life redesign coaching, structure changes, sustainable life architecture" },
            { name: "Z", contribution: "Daily settling practices, relationship with stillness, Inner Care framework" }
          ]
        },
        {
          name: "From Survival Mode to Meaning",
          desc: "For people who've been surviving so long they've lost contact with why.",
          fullDescription: "For people who've been surviving so long they've lost contact with why. Built around logotherapy's framework: suffering without meaning creates despair, but suffering transformed through meaning creates resilience. The body keeps running on cortisol and adrenaline long after the crisis passes. Dan leads the logotherapy work: Viktor Frankl's dereflection and Socratic dialogue, helping participants find meaning that's already present but obscured by survival fog. Rob provides clinical support for participants whose survival mode has roots in trauma — EMDR and somatic practices to help the nervous system recognize that the crisis is over. Jenna addresses the biological reality of prolonged stress: what it does to the immune system, gut, sleep, and hormones, and how to rebuild physiological resilience. Mike coaches on the practical life changes that survival mode has prevented — relationships, career decisions, creative pursuits that got shelved. Z brings daily practices for reconnecting with presence, desire, and the body's signals.",
          team: [
            { name: "Dan", contribution: "Logotherapy, dereflection, Socratic dialogue, meaning-making through suffering" },
            { name: "Rob", contribution: "Trauma processing (EMDR), somatic nervous system work, clinical anchoring" },
            { name: "Jenna", contribution: "Physiological cost of chronic stress, immune/gut/sleep recovery, resilience building" },
            { name: "Mike", contribution: "Life changes deferred by survival mode, practical next steps, coaching" },
            { name: "Z", contribution: "Presence reconnection, body signal awareness, daily regulation practices" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Theme 2: Meaning, Purpose & The Examined Life",
      subtitle: "For people asking \"Is this all there is?\" — and ready to find out it isn't.",
      icon: Compass,
      retreats: [
        {
          name: "The Meaning Project Retreat",
          desc: "An immersive exploration of Frankl's three pathways to meaning.",
          fullDescription: "An immersive exploration of Frankl's three pathways to meaning: what you give to the world (creative values), what the world gives to you (experiential values), and the stance you take toward unavoidable suffering (attitudinal values). Dan leads the core logotherapy curriculum — Socratic dialogue, dereflection, guided exercises for discovering meaning. Rob anchors the clinical dimension: when meaninglessness is tangled with depression, trauma, or grief, therapeutic processing clears the path. Jenna contributes the embodied dimension — meaning isn't just cognitive, and the body has wisdom about what makes life worth living. Mike provides coaching on translating meaning insights into life design: once you know what matters, how do you structure your days around it? Z facilitates daily inner listening practices and reflective journaling, helping participants access their own knowing.",
          team: [
            { name: "Dan", contribution: "Logotherapy curriculum, Socratic dialogue, Frankl's three values, meaning exercises" },
            { name: "Rob", contribution: "Clinical processing when meaninglessness involves depression/trauma/grief" },
            { name: "Jenna", contribution: "Embodied meaning, body wisdom, somatic contributions to purpose-finding" },
            { name: "Mike", contribution: "Life design coaching, structuring days around meaning, practical action" },
            { name: "Z", contribution: "Inner listening practices, reflective journaling, accessing personal knowing" }
          ]
        },
        {
          name: "The Crossroads Retreat",
          desc: "For people standing at a fork in the road — career, relationship, identity, faith.",
          fullDescription: "For people standing at a fork in the road — career, relationship, identity, faith — who are paralyzed by the weight of the decision. Every choice closes doors. Every path has costs. The crossroads is terrifying. Dan brings logotherapy's framework for decision-making: Frankl's concept of \"the defiant power of the human spirit\" — the freedom to choose your response to any situation — and practical tools for discerning what you're being called to do. Rob provides clinical support for the anxiety, grief, and fear that surround major life decisions, including EMDR for processing the losses inherent in choosing. Mike runs his crossroads coaching methodology: clarifying values, identifying fears, testing scenarios, building decision criteria. Jenna addresses the physiological impact of chronic indecision (it's exhausting) and supports participants in building the physical resilience to act. Z leads inner clarity practices — because the answer is often already known, just buried under noise.",
          team: [
            { name: "Dan", contribution: "Logotherapy on decision-making, Frankl's defiant power, discernment tools" },
            { name: "Rob", contribution: "Anxiety and grief around decisions, EMDR for processing losses of choosing" },
            { name: "Mike", contribution: "Crossroads coaching methodology, values clarification, decision criteria" },
            { name: "Jenna", contribution: "Physiological impact of indecision, building resilience to act" },
            { name: "Z", contribution: "Inner clarity practices, accessing buried knowing, cutting through noise" }
          ]
        },
        {
          name: "Who Am I Now? Identity After the Role Ends",
          desc: "Retirement, divorce, empty nest, job loss, coming out, career change — when the thing that defined you is gone.",
          fullDescription: "Retirement, divorce, empty nest, job loss, coming out, career change — when the thing that defined you is gone, who are you? This retreat is for people in identity limbo. Dan provides the existential framework: identity as ongoing creation, not fixed truth, and logotherapy's insistence that meaning can be found in any circumstance. Rob brings the clinical lens on identity disruption — it's often grief, and processing that grief is essential to moving forward. Mike's coaching specialty is exactly this: helping people in transition design their next chapter. Jenna addresses the biological transitions that often accompany identity shifts (menopause, aging, health changes) and their impact on self-concept. Z facilitates practices for reconnecting with a core self that exists beneath all roles — the \"I\" that remains when everything else changes.",
          team: [
            { name: "Dan", contribution: "Existential identity framework, logotherapy on meaning in any circumstance" },
            { name: "Rob", contribution: "Clinical lens on identity disruption as grief, processing for forward movement" },
            { name: "Mike", contribution: "Transition coaching specialty, designing the next chapter" },
            { name: "Jenna", contribution: "Biological transitions (menopause, aging), impact on self-concept" },
            { name: "Z", contribution: "Core self reconnection practices, the \"I\" beneath all roles" }
          ]
        },
        {
          name: "Faith, Doubt & The Sacred",
          desc: "For people wrestling with their relationship to faith.",
          fullDescription: "For people wrestling with their relationship to faith — deconstructing, reconstructing, grieving a religious identity, or finding their way back to something spiritual on their own terms. Rob brings a decade of theological study (Gordon-Conwell, contemplative traditions, world religions) and creates space for spiritual exploration without agenda. Dan's logotherapy framework includes the \"noetic dimension\" — Frankl's term for the spiritual core of human experience, which exists whether or not you practice religion. Jenna provides grounding for people whose faith transitions are affecting their mental health and helps participants integrate mind, body, and spirit. Mike facilitates the practical dimension: what does a spiritual life look like for you now, and how do you build practices that fit? Z leads contemplative practices accessible to people from any tradition or none — meditation, breathwork, inner listening.",
          team: [
            { name: "Rob", contribution: "Decade of theological study, contemplative traditions, world religions, spiritual exploration" },
            { name: "Dan", contribution: "Logotherapy's noetic dimension, spiritual core of human experience" },
            { name: "Jenna", contribution: "Grounding for faith transitions affecting mental health, mind-body-spirit integration" },
            { name: "Mike", contribution: "Practical spiritual life design, building fitting practices" },
            { name: "Z", contribution: "Contemplative practices for any tradition, meditation, breathwork, inner listening" }
          ]
        },
        {
          name: "The Giving Back: From Pain to Purpose to Service",
          desc: "For people who've been through something hard and now feel called to help others.",
          fullDescription: "For people who've been through something hard, done the work, and now feel called to use their experience to help others — but aren't sure how. Peer support? Coaching? Going back to school? Starting something new? Rob, Dan, Mike, and Z have all made this exact pivot — from personal transformation to professional service — and bring lived expertise alongside clinical and coaching frameworks. Dan leads the logotherapy dimension: how suffering becomes meaningful through service, and the ethical considerations of using your story. Rob provides clinical guidance on readiness: processing your own experience thoroughly before holding space for others. Mike coaches on the practical pathways (certification, training, business models, career pivots). Jenna addresses the physical demands of helping professions and how to build sustainable self-care. Z shares his journey from crisis to authorship and coaching, and helps participants find their authentic voice.",
          team: [
            { name: "Dan", contribution: "Logotherapy on suffering through service, ethical considerations of story-sharing" },
            { name: "Rob", contribution: "Clinical guidance on readiness, processing before holding space" },
            { name: "Mike", contribution: "Practical pathways (certification, training, business models), career pivot coaching" },
            { name: "Jenna", contribution: "Physical demands of helping professions, sustainable self-care" },
            { name: "Z", contribution: "Journey from crisis to authorship, finding authentic voice" }
          ]
        },
        {
          name: "After the Church: Healing Religious Trauma",
          desc: "When God was the wound. For people harmed by authoritarian religious environments.",
          fullDescription: "When God was the wound. For people harmed by authoritarian religious environments — spiritual abuse, purity culture, shame-based theology, hell threats, community rejection. The body keeps the score of religious trauma, and healing requires more than intellectual deconstruction. Rob brings clinical expertise in religious trauma recovery, EMDR for processing, and his own theological training that allows him to engage the content without dismissing the spiritual dimension. Dan provides logotherapy's framework for rebuilding meaning after religious collapse — you don't have to throw out the baby with the bathwater, and Frankl's approach separates toxic religion from the human need for transcendence. Jenna addresses the somatic impact of religious trauma (the body stored those threats) and helps participants reclaim physical safety. Mike coaches on rebuilding community and identity outside the religious structure that was lost. Z leads practices for reconnecting with inner authority — learning to trust your own voice after being taught that it was dangerous.",
          team: [
            { name: "Rob", contribution: "Religious trauma clinical expertise, EMDR, theological training, spiritual dimension" },
            { name: "Dan", contribution: "Logotherapy for post-religious meaning, separating toxic religion from transcendence" },
            { name: "Jenna", contribution: "Somatic impact of religious trauma, reclaiming physical safety" },
            { name: "Mike", contribution: "Rebuilding community and identity outside lost religious structure" },
            { name: "Z", contribution: "Inner authority reconnection, trusting your own voice" }
          ]
        },
        {
          name: "The Examined Life",
          desc: "Frankl, Kierkegaard, the Stoics, the mystics — and you.",
          fullDescription: "Frankl, Kierkegaard, the Stoics, the mystics — and you. A philosophical retreat for people drawn to big questions as questions, not just crises. What does it mean to live well? What do I owe others? What happens when I die? How do I face suffering? Dan anchors the curriculum with logotherapy and existential philosophy. Rob brings depth in comparative theology and contemplative traditions. Jenna adds the neuroscience of contemplation and the biological basis of transcendent experience. Mike facilitates discussion and helps participants translate philosophical insight into practical life choices. Z leads contemplative practices that make these questions experiential, not just intellectual. This retreat attracts a particular kind of participant — curious, reflective, interested in substance — and the group conversation is a major part of the experience.",
          team: [
            { name: "Dan", contribution: "Logotherapy and existential philosophy curriculum" },
            { name: "Rob", contribution: "Comparative theology and contemplative traditions" },
            { name: "Jenna", contribution: "Neuroscience of contemplation, biological basis of transcendent experience" },
            { name: "Mike", contribution: "Discussion facilitation, translating philosophy to practical life" },
            { name: "Z", contribution: "Contemplative practices making questions experiential" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Theme 3: Breaking Free",
      subtitle: "For people who know exactly what's holding them back — and for those who don't.",
      icon: KeyRound,
      retreats: [
        {
          name: "The Escape Routes Retreat",
          desc: "Overworking. Over-drinking. Over-scrolling. Over-spending.",
          fullDescription: "Overworking. Over-drinking. Over-scrolling. Over-spending. We all have escape routes. This retreat brings clinical addictions expertise, medical intervention, and raw lived experience together. Dan has 25 years of licensed clinical addictions counseling plus his own relationship with recovery. Rob brings IFS for understanding the parts that drive compulsive behavior, plus EMDR for processing the underlying pain. Jenna provides the medical dimension: what substances and behaviors are doing to your brain and body, and what medical support looks like when you're ready to stop. Mike coaches on rebuilding life structure when the escape route is closed — because you need something better to escape to, not just willpower. Z shares his own experience with coping mechanisms that stopped working, and leads practices for sitting with discomfort instead of running from it.",
          team: [
            { name: "Dan", contribution: "25 years addictions expertise, lived recovery experience, group facilitation" },
            { name: "Rob", contribution: "IFS for compulsive parts, EMDR for underlying pain" },
            { name: "Jenna", contribution: "Medical dimension of substances/behaviors, brain/body impact, medical support" },
            { name: "Mike", contribution: "Life restructuring when escape route closes, building something better" },
            { name: "Z", contribution: "Lived experience with coping mechanisms, sitting with discomfort" }
          ]
        },
        {
          name: "Grey Area Drinking & The Coping Spectrum",
          desc: "Not everyone with a drinking problem looks like the stereotype.",
          fullDescription: "Not everyone with a drinking problem looks like the stereotype. This retreat is for people in the grey area — you're not in crisis, but you notice your relationship with alcohol is shifting. You're drinking more than you used to. You're thinking about it more. You're using it to manage stress, anxiety, social situations, the end of the day. Dan and Rob bring clinical addictions expertise and create a non-judgmental space for exploring what's happening. Jenna provides education on what alcohol actually does to the body, brain, and hormones — especially for women — and helps participants understand why their drinking patterns may be shifting. Mike coaches on lifestyle changes that make alcohol less necessary. Z brings practices for emotional regulation and self-soothing that don't require a drink.",
          team: [
            { name: "Dan", contribution: "Clinical addictions expertise, non-judgmental exploration space" },
            { name: "Rob", contribution: "Addictions clinical work, understanding the shift in relationship with alcohol" },
            { name: "Jenna", contribution: "Alcohol's impact on body/brain/hormones, especially women, why patterns shift" },
            { name: "Mike", contribution: "Lifestyle changes that reduce need for alcohol" },
            { name: "Z", contribution: "Emotional regulation and self-soothing practices without substances" }
          ]
        },
        {
          name: "Anxiety: The Inner Cage",
          desc: "For people whose anxiety has become the organizing principle of their life.",
          fullDescription: "For people whose anxiety has become the organizing principle of their life — limiting what you do, where you go, who you can become. Clinical, medical, philosophical, and experiential approaches combined. Rob brings EMDR, IFS, and DBT skills for anxiety. Jenna provides the neurobiology: what anxiety actually is in the brain and body, and what medical and lifestyle interventions can help. Dan offers logotherapy's paradoxical intention — a counterintuitive technique for anxiety that's been clinically validated — and the existential reframe that some anxiety is the price of being alive and awake. Mike coaches on building a life that's bigger than anxiety's cage. Z shares his own lifelong relationship with anxiety and leads daily practices that helped him find peace.",
          team: [
            { name: "Z", contribution: "\"Inner Care\" emotional regulation tools, lived experience with anxiety, daily settling practices" },
            { name: "Rob", contribution: "EMDR, DBT skills, trauma-rooted anxiety processing, clinical anchoring" },
            { name: "Dan", contribution: "Existential anxiety through logotherapy, meaning-based reframing, group facilitation" },
            { name: "Jenna", contribution: "Neurobiology of anxiety, non-pharmaceutical interventions, supplement and lifestyle protocols" },
            { name: "Mike", contribution: "Coaching on life expansion beyond anxiety's limits, vision work, practical courage-building" }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Theme 4: Relationships & Repair",
      subtitle: "For couples, families, and individuals whose most important relationships are in trouble.",
      icon: HeartHandshake,
      retreats: [
        {
          name: "The Couples Reset",
          desc: "For couples stuck in the same fight, the same distance, the same silence.",
          fullDescription: "For couples stuck in the same fight, the same distance, the same silence. Rob leads with Emotionally Focused Therapy (EFT) and attachment science — mapping the cycle that keeps pulling you apart. Dan brings his expertise in resentment-to-contempt dynamics (drawn from his clinical writing and Gottman-informed work) and helps couples find meaning in the struggle rather than just managing it. Jenna offers couples a biological lens: how stress, sleep deprivation, hormonal changes, and even nutrition affect how you show up in your relationship — and what to do about it. Mike provides individual coaching sessions for each partner to process their own goals, fears, and vision for the relationship. Z leads couples through emotional regulation and communication practices — tools for staying present with each other when emotions run high, rather than shutting down or escalating.",
          team: [
            { name: "Rob", contribution: "EFT, attachment science, cycle mapping, clinical couples work" },
            { name: "Dan", contribution: "Resentment-to-contempt dynamics, meaning in relational struggle, couples group facilitation" },
            { name: "Jenna", contribution: "Biology of relational stress, hormonal and sleep factors, wellness support for both partners" },
            { name: "Mike", contribution: "Individual coaching for each partner, personal vision and goal clarity within the relationship" },
            { name: "Z", contribution: "Emotional regulation for couples, communication practices, staying present under pressure" }
          ]
        },
        {
          name: "Family Systems Intensive",
          desc: "When one person in the family is struggling, the whole system feels it.",
          fullDescription: "When one person in the family is struggling, the whole system feels it. This retreat is for families — parents and adult children, siblings, blended families — who need more than a weekly therapy hour. Rob brings structural and strategic family therapy, plus crisis management experience. Dan contributes 25 years of family work and a developmental lens on how families get stuck across generations. Jenna adds medical perspective when a family member's mental health involves medication, diagnosis, or treatment planning — and helps families understand the biological dimensions of what they're facing. Mike works with individual family members on their own transitions and identity within the system, providing coaching that complements the family therapy work. Z facilitates experiential exercises that help family members hear each other differently — breaking through the scripts everyone's been reciting for years.",
          team: [
            { name: "Dan", contribution: "25 years of family clinical work, generational patterns, developmental perspective" },
            { name: "Jenna", contribution: "Medical education for families, medication understanding, biological factors in family mental health" },
            { name: "Mike", contribution: "Individual coaching for family members, identity within the system, personal transition support" },
            { name: "Z", contribution: "Experiential communication exercises, breaking relational scripts, emotional expression facilitation" },
            { name: "Rob", contribution: "Structural/strategic family therapy, crisis management, attachment and systems lens" }
          ]
        },
        {
          name: "After Betrayal: Trust, Repair, and What Comes Next",
          desc: "Infidelity, financial deception, addiction secrets, broken promises.",
          fullDescription: "Infidelity, financial deception, addiction secrets, broken promises — betrayal shatters the story you thought you were living. This retreat provides a structured container for the raw, messy process of deciding what to do next. Rob leads the clinical work: processing trauma, rebuilding (or releasing) attachment bonds, and navigating the grief. Dan provides the meaning-making framework — how do you find purpose in the worst thing that's happened to your relationship? Mike supports individuals in the practical rebuilding — what does your life look like now, and what do you want it to become? Jenna helps participants whose bodies are carrying the betrayal — the insomnia, the appetite changes, the constant cortisol — and provides medical and nutritional support for stabilization. Z teaches practices for sitting with the pain without numbing or spiraling, and for beginning to trust your own voice again.",
          team: [
            { name: "Jenna", contribution: "Medical stabilization for trauma symptoms, sleep and appetite support, stress physiology education" },
            { name: "Mike", contribution: "Practical life rebuilding, coaching on what comes next, vision work for individuals in transition" },
            { name: "Z", contribution: "Emotional regulation in acute pain, inner trust practices, self-expression recovery" },
            { name: "Rob", contribution: "Trauma processing, attachment bond work, clinical grief and betrayal recovery" },
            { name: "Dan", contribution: "Meaning-making in betrayal, logotherapy for suffering, relational purpose exploration" }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Theme 5: Women's Work",
      subtitle: "For women who've been holding it all together and are ready to hold themselves.",
      icon: Crown,
      retreats: [
        {
          name: "The Permission Retreat",
          desc: "Permission to rest. Permission to want. Permission to say no. Permission to take up space.",
          fullDescription: "Permission to rest. Permission to want. Permission to say no. Permission to take up space. For women who've spent years managing households, careers, children, aging parents, and everyone else's emotions. Rob provides clinical depth in complex trauma and the particular ways women's self-abandonment manifests. Jenna leads sessions on women's hormonal health, perimenopause, the gut-brain axis, and how biology intersects with mental health across the lifespan — the medical conversation women rarely get. Dan contributes logotherapy's lens on finding meaning in caretaking without being consumed by it — and the courage it takes to claim your own life. Z teaches emotional regulation and self-expression practices, including vocal work that helps women access the voice they've been swallowing. Mike facilitates vision work: now that you've given yourself permission, what do you actually want? His coaching methodology helps women translate longing into a concrete, actionable plan.",
          team: [
            { name: "Jenna", contribution: "Women's hormonal health, perimenopause, gut-brain axis, biology across the lifespan" },
            { name: "Mike", contribution: "Vision work and action planning, coaching methodology for translating longing into plans" },
            { name: "Z", contribution: "Self-expression practices, vocal work, emotional regulation, accessing the suppressed voice" },
            { name: "Rob", contribution: "Complex trauma processing, women's self-abandonment patterns, IFS, clinical holding" },
            { name: "Dan", contribution: "Meaning in caretaking vs. self-sacrifice, logotherapy on courage and claiming your life" }
          ]
        },
        {
          name: "Mothers at the Crossroads",
          desc: "For mothers navigating the identity earthquake of parenthood.",
          fullDescription: "For mothers navigating the identity earthquake of parenthood — whether it's the postpartum period, the shift when kids start school, the empty nest, or the realization that you've lost yourself in the role. Jenna brings specialized expertise in perinatal mental health and mood disorders. Rob provides attachment-based therapy and IFS work for reconnecting with the self beneath the \"mom\" identity. Dan offers the meaning-making dimension — motherhood as one source of meaning, not the only one, and the logotherapy framework for expanding identity. Mike coaches on practical next steps — rebuilding a career, finding new purpose, designing what's next. Z leads daily practices for reconnecting with who you are beneath the roles, drawing from his \"Inner Care\" framework that works with anyone in an identity transition.",
          team: [
            { name: "Mike", contribution: "Career and life rebuilding coaching, practical next-step planning, designing what's next" },
            { name: "Z", contribution: "Inner Care daily practices, identity reconnection exercises, self-expression for women in transition" },
            { name: "Rob", contribution: "Attachment-based therapy, IFS for identity reconnection, clinical depth" },
            { name: "Dan", contribution: "Meaning-making beyond motherhood, logotherapy on expanding identity, group facilitation" },
            { name: "Jenna", contribution: "Perinatal mental health expertise, hormonal mood disorder support, postpartum and perimenopause care" }
          ]
        },
        {
          name: "Women in Leadership: The Double Bind",
          desc: "For women navigating authority, ambition, and the impossible expectations.",
          fullDescription: "For women navigating authority, ambition, and the impossible expectations that come with both — too assertive or too soft, too emotional or too cold, too ambitious or not ambitious enough. The math never works, and the cost is exhaustion, self-doubt, and a slow erosion of authenticity. Jenna leads from her experience as a woman in medicine — a field where the double bind is constant — and addresses the physical toll of chronic performance pressure on women's bodies: adrenal fatigue, hormonal disruption, and the inflammation that comes from years of code-switching. Rob brings clinical work on imposter syndrome, perfectionism, and the attachment patterns that drive women to over-function in professional settings. Mike coaches on leadership identity — defining power on your own terms rather than adapting to someone else's model. Dan provides logotherapy's framework for meaning in professional life and the courage to lead from values rather than approval. Z leads practices for reconnecting with authentic self-expression in environments that punish it — finding your real voice when the professional one has taken over.",
          team: [
            { name: "Jenna", contribution: "Women in medicine experience, adrenal fatigue and hormonal cost of performance pressure, body-based recovery" },
            { name: "Rob", contribution: "Imposter syndrome, perfectionism, attachment patterns driving over-functioning, clinical processing" },
            { name: "Mike", contribution: "Leadership identity coaching, defining power on your own terms, practical strategy" },
            { name: "Dan", contribution: "Logotherapy on meaning in professional life, courage to lead from values, group facilitation" },
            { name: "Z", contribution: "Authentic self-expression in punishing environments, finding real voice, daily regulation practices" }
          ]
        },
        {
          name: "The Body After Everything",
          desc: "For women whose bodies have been through it.",
          fullDescription: "For women whose bodies have been through it — hormonal transitions, postpartum changes, perimenopause, menopause, body image disruption after trauma or illness, the slow disconnection from a body that no longer feels like home. Jenna leads the medical dimension: comprehensive hormonal assessment, functional nutrition, supplement protocols, and education about what's actually happening physiologically during these transitions — because most women have never had a provider sit down and explain it. Rob brings the psychological depth: EMDR and IFS for processing body-related trauma, grief over the body you had, and the identity disruption that comes with physical change. Dan offers logotherapy's framework for meaning-making in aging and embodiment — Frankl's conviction that every stage of life carries unique meaning, including the stages our culture treats as decline. Mike coaches on rebuilding confidence and self-image from the inside out. Z leads gentle somatic and self-expression practices designed for bodies in transition — reconnecting with the body as a source of wisdom rather than a problem to solve.",
          team: [
            { name: "Rob", contribution: "EMDR/IFS for body-related trauma, grief processing, identity disruption from physical change" },
            { name: "Jenna", contribution: "Comprehensive hormonal assessment, functional nutrition, supplement protocols, transition education" },
            { name: "Dan", contribution: "Meaning-making in aging and embodiment, Frankl on every life stage carrying unique meaning" },
            { name: "Mike", contribution: "Confidence rebuilding coaching, self-image work, practical forward movement" },
            { name: "Z", contribution: "Gentle somatic practices for bodies in transition, reconnecting with bodily wisdom, self-expression" }
          ]
        },
        {
          name: "Reclaiming Desire",
          desc: "For women who've lost connection to what they actually want.",
          fullDescription: "For women who've lost connection to what they actually want — sexually, creatively, professionally, spiritually — and aren't sure when it happened or how to get it back. This retreat addresses the broader experience of wanting being suppressed: by caretaking, by trauma, by exhaustion, by relationships that required smallness, by cultures that taught women that desire itself is dangerous. Rob brings clinical depth in trauma, attachment, and the ways women's desire gets shut down by early relational patterns — and IFS work with the parts that learned it wasn't safe to want. Jenna addresses the biological dimension: hormones, libido, nervous system states that block desire, and the medical factors that women are often too embarrassed to ask about. Dan provides the existential framework — desire as a signal pointing toward meaning, and logotherapy's insistence that the person who has a \"why\" will find the \"how.\" Mike facilitates the vision work: once you reconnect with what you want, how do you actually build a life that includes it? Z leads practices for accessing desire through the body and voice — because wanting often returns through sensation before language.",
          team: [
            { name: "Dan", contribution: "Desire as signal toward meaning, logotherapy on \"why\" and \"how,\" existential permission to want" },
            { name: "Rob", contribution: "Trauma and attachment roots of suppressed desire, IFS parts work, clinical safety for vulnerability" },
            { name: "Jenna", contribution: "Hormones, libido, nervous system states blocking desire, medical dimension of women's sexual health" },
            { name: "Mike", contribution: "Vision coaching for building a life that includes what you want, translating desire into action" },
            { name: "Z", contribution: "Body-based desire reconnection, vocal and somatic practices, accessing wanting through sensation" }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Theme 6: Men's Work",
      subtitle: "For men who are tired of performing strength and ready to build it for real.",
      icon: Mountain,
      retreats: [
        {
          name: "The Man in the Arena",
          desc: "A space where men don't have to perform, fix, or produce.",
          fullDescription: "Dan has been writing and podcasting about the masculinity crisis for years — from \"The Young Man in the Basement\" to his episodes on men's health, fatherhood, and the failure of traditional models. Rob has clinical expertise working with men stuck in workaholism, emotional shutdown, anger, and substances. This retreat creates what most men have never had: a space where they don't have to perform, fix, or produce. Structured around vulnerability, accountability, and purpose. Evening sessions involve physical challenge (hiking, cold water, movement) because men often access emotion through the body first. Mike brings his own experience of identity work and his coaching on legacy, purpose, and what you want to be remembered for. Z brings his story of anxiety, insecurity, and learning to express what he was hiding behind a smile — and leads practices that help men find words for what they've been carrying in silence. Jenna provides education on men's hormonal health, testosterone, sleep, and the physical dimensions of emotional shutdown that men rarely hear about.",
          team: [
            { name: "Mike", contribution: "Identity and legacy coaching, lived experience with identity work, purpose and vision facilitation" },
            { name: "Z", contribution: "Lived experience with anxiety and masking, self-expression practices, helping men find words for feeling" },
            { name: "Rob", contribution: "Clinical expertise with men's emotional shutdown, anger, workaholism, substance use; somatic practices" },
            { name: "Dan", contribution: "Masculinity research and writing, fatherhood expertise, logotherapy on masculine purpose" },
            { name: "Jenna", contribution: "Men's hormonal health, testosterone, sleep science, physical dimensions of emotional shutdown" }
          ]
        },
        {
          name: "Fathers & Sons: Across the Divide",
          desc: "For fathers and their teenage or adult sons who've lost connection — or never had it.",
          fullDescription: "For fathers and their teenage or adult sons who've lost connection — or never had it. Dan brings decades of experience with adolescent development, failure to launch, and intergenerational patterns. Rob provides the attachment and family systems framework. The retreat creates structured experiences where fathers and sons can be honest with each other in ways the dinner table doesn't allow. Mike facilitates individual coaching sessions for fathers wrestling with their own legacy and for sons trying to find their own path without severing the bond. Jenna addresses the biological realities on both sides — the hormonal storms of adolescence and the physical changes of aging that affect how men relate. Z connects with younger participants as someone closer to their experience, and leads communication exercises that bypass the usual defenses. Optional individual sessions with any facilitator. This retreat can also work for father-daughter, mother-son, or other parent-child configurations — the core is relational repair across generations.",
          team: [
            { name: "Z", contribution: "Peer connection with younger participants, communication exercises, self-expression bridging" },
            { name: "Rob", contribution: "Attachment science, family systems framework, clinical relational repair" },
            { name: "Dan", contribution: "Adolescent development expertise, failure to launch clinical work, intergenerational pattern recognition" },
            { name: "Jenna", contribution: "Adolescent and aging hormonal education, biological factors in parent-child relating" },
            { name: "Mike", contribution: "Individual coaching for fathers and sons, legacy work, personal identity within family" }
          ]
        },
        {
          name: "Veterans & First Responders: After the Mission",
          desc: "For those who served — military, law enforcement, fire, EMS, healthcare.",
          fullDescription: "For men (and women) who served — military, law enforcement, fire, EMS, healthcare — and are now navigating the transition back to civilian identity, or processing what the work cost them. Rob has specific clinical experience with populations exposed to consistent trauma, plus EMDR for processing. Dan brings logotherapy's framework for meaning after suffering — directly descended from Frankl's concentration camp experience. Jenna provides medical and psychiatric perspective on trauma's impact on the body, including TBI awareness, medication education, and holistic recovery support. Z offers tools for emotional regulation that don't require talking about \"feelings\" in the traditional sense — meeting people where they are. Mike brings coaching for the identity transition from service to civilian life — a career pivot that parallels his own experience of leaving one professional identity and building another.",
          team: [
            { name: "Dan", contribution: "Logotherapy for meaning after suffering, Frankl's framework, group facilitation" },
            { name: "Jenna", contribution: "Medical perspective on trauma's physical toll, TBI awareness, medication education, holistic recovery" },
            { name: "Mike", contribution: "Identity transition coaching, career pivot experience, rebuilding purpose after service" },
            { name: "Z", contribution: "Emotional regulation tools that bypass clinical language, meeting people where they are, practical daily skills" },
            { name: "Rob", contribution: "Trauma processing (EMDR), clinical work with trauma-exposed populations, somatic practices" }
          ]
        },
        {
          name: "The Anger Beneath the Anger",
          desc: "For men whose anger has become the default emotion.",
          fullDescription: "For men whose anger has become the default emotion — the one that shows up when grief would be more accurate, when fear is what's really there, when shame is running the show underneath. Most men were taught that anger is the only acceptable emotional outlet, and over time it becomes the lid on everything else. Rob leads the clinical dimension: what's actually happening neurologically and psychologically when anger becomes the dominant response, and how to access what's beneath it through EMDR, IFS, and somatic work. Dan brings logotherapy's framework for transforming destructive patterns into purposeful action — Frankl's conviction that anger directed at injustice can be meaningful, but anger as avoidance is suffering without purpose. Jenna addresses the cardiovascular, hormonal, and inflammatory impact of chronic anger — what it's doing to the body while it's protecting the psyche. Mike coaches on how anger shows up in leadership, relationships, and parenting — and the practical cost of letting it run unchecked. Z leads emotional expression practices designed specifically for men who've never had permission to feel anything else — meeting the anger with curiosity rather than correction.",
          team: [
            { name: "Rob", contribution: "Neuroscience of anger, EMDR/IFS for what's beneath, somatic processing, clinical leadership" },
            { name: "Dan", contribution: "Logotherapy on anger vs. purpose, transforming destructive patterns, meaning in emotional honesty" },
            { name: "Jenna", contribution: "Cardiovascular and inflammatory impact of chronic anger, hormonal dimension, body-based recovery" },
            { name: "Mike", contribution: "Anger in leadership and relationships, practical cost assessment, coaching toward new patterns" },
            { name: "Z", contribution: "Emotional expression practices for men, meeting anger with curiosity, building emotional vocabulary" }
          ]
        },
        {
          name: "Men & Addiction: Beyond the Label",
          desc: "Grey area drinking, workaholism, porn and sex, gambling — the escape routes men use.",
          fullDescription: "For men who know something isn't right but don't fit the stereotype — and for men who do. Grey area drinking. Workaholism that everyone calls \"ambition.\" Porn and sex that's become compulsive. Gambling. Spending. The escape routes men use and the shame that locks them in. Dan brings 25 years of licensed clinical addictions counseling plus his own relationship with recovery — he leads with the authority of someone who's done the work from both sides. Rob brings clinical addiction expertise, IFS for the parts that drive compulsive behavior, and the neuroscience of escape patterns. Jenna provides the medical dimension: what substances and addictive behaviors actually do to the brain and body, and what medical and nutritional support looks like in early recovery. Mike coaches on rebuilding identity and life structure when the coping mechanism is removed — the \"now what?\" that recovery demands. Z shares his own story of masking pain behind productivity and the breaking point that forced honesty, and leads practices for sitting with discomfort without reaching for the exit.",
          team: [
            { name: "Dan", contribution: "25 years addictions expertise, lived recovery experience, logotherapy on meaning vs. escape" },
            { name: "Rob", contribution: "Clinical addiction treatment, IFS for compulsive parts, neuroscience of avoidance" },
            { name: "Jenna", contribution: "Brain and body impact of substances and addictive behaviors, nutritional support, medical recovery" },
            { name: "Mike", contribution: "Identity rebuilding in recovery, life structure coaching, the \"now what?\" of sobriety" },
            { name: "Z", contribution: "Lived experience with masking and breaking point, sitting with discomfort, daily regulation practices" }
          ]
        },
        {
          name: "Divorced Dads: Rebuilding Connection",
          desc: "For fathers navigating divorce, custody, co-parenting, and the fear of losing their kids.",
          fullDescription: "For fathers in the middle of divorce, on the other side of it, or years into a co-parenting arrangement that still feels like a wound. The fear of losing your kids. The guilt of not being there every day. The anger at the system, at your ex, at yourself. The loneliness of an empty apartment on the nights they're not with you. Mike leads from lived experience — he knows this terrain personally and brings coaching for the practical and emotional dimensions of rebuilding. Rob provides the family systems and attachment lens: how to maintain secure connection with your children when the family structure has fractured, and clinical support for the grief and identity disruption of divorce. Dan offers logotherapy's framework for finding meaning in fractured family life — Frankl's insistence that suffering without meaning creates despair, but suffering met with purpose creates resilience, is directly relevant. Jenna addresses the physical toll: sleep disruption, stress hormones, the health consequences of isolation and chronic conflict that divorced men rarely talk about. Z leads practices for emotional regulation during high-conflict moments — co-parenting communication, custody transitions, and the moments when your kid asks the question you've been dreading.",
          team: [
            { name: "Mike", contribution: "Lived experience with divorce, coaching for practical and emotional rebuilding, co-parenting navigation" },
            { name: "Rob", contribution: "Family systems and attachment, maintaining secure connection with kids, clinical grief and identity work" },
            { name: "Dan", contribution: "Logotherapy for meaning in fractured family life, suffering met with purpose, fatherhood expertise" },
            { name: "Jenna", contribution: "Physical toll of divorce and isolation, stress hormones, health consequences of chronic conflict" },
            { name: "Z", contribution: "Emotional regulation for high-conflict moments, co-parenting communication practices, daily grounding" }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "Theme 7: Pride, Identity & Authenticity",
      subtitle: "For LGBTQ+ individuals navigating the intersection of identity, mental health, and belonging.",
      icon: Rainbow,
      retreats: [
        {
          name: "Coming Home to Yourself",
          desc: "For LGBTQ+ individuals at any stage of their journey.",
          fullDescription: "For LGBTQ+ individuals at any stage of their journey — coming out, navigating family rejection, building chosen family, processing religious trauma, or simply wanting space to exist without code-switching. Mike leads from deep personal experience: he wrestled with his identity and sexuality at a young age and has built his coaching practice around helping people live authentically. Rob provides clinical support for the trauma, grief, and complex family dynamics that often accompany queer experience. Dan offers the existential framework — identity as an ongoing project of meaning-making, not a fixed destination, and logotherapy's insistence that every human life has inherent dignity and purpose. Z brings practices for finding and using your authentic voice — literally and figuratively — from his work helping people who've been silencing parts of themselves. Jenna addresses the medical dimensions that LGBTQ+ individuals often face: hormone therapy questions, the mental health impact of minority stress, and holistic support for bodies that may have been sites of shame.",
          team: [
            { name: "Z", contribution: "Authentic voice and self-expression practices, working with people who've been self-silencing" },
            { name: "Rob", contribution: "Clinical support for LGBTQ+ trauma, grief, family dynamics, attachment work" },
            { name: "Dan", contribution: "Existential identity framework, logotherapy on dignity and purpose, meaning-making" },
            { name: "Jenna", contribution: "LGBTQ+ medical considerations, hormone therapy awareness, minority stress impact, holistic body support" },
            { name: "Mike", contribution: "Lived experience with identity and sexuality, authenticity coaching, living on your own terms" }
          ]
        },
        {
          name: "Rainbow Families: Navigating What No One Prepared You For",
          desc: "For LGBTQ+ parents, couples, and families dealing with challenges specific to their experience.",
          fullDescription: "For LGBTQ+ parents, couples, and families dealing with challenges specific to their experience — adoption, surrogacy, blended queer families, co-parenting, coming out within an existing family structure, or raising children in a world that still doesn't always make space. Rob leads with family systems expertise and attachment science. Mike offers coaching for the practical and emotional dimensions of building family on your own terms. Dan brings the logotherapy lens on creating meaning within family structures that don't follow traditional scripts. Jenna provides medical and wellness support for family members navigating health questions specific to their experience. Z facilitates family communication exercises and helps family members — especially younger ones — find safe ways to express what they need.",
          team: [
            { name: "Rob", contribution: "Family systems expertise, attachment science, clinical relational work" },
            { name: "Dan", contribution: "Meaning-making in non-traditional family structures, logotherapy, group facilitation" },
            { name: "Jenna", contribution: "Medical and wellness support, health questions specific to LGBTQ+ family experience" },
            { name: "Mike", contribution: "Lived experience, coaching on building family on your own terms, practical and emotional support" },
            { name: "Z", contribution: "Family communication exercises, self-expression facilitation, connecting with younger family members" }
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Theme 8: Psychedelic Education & Integration",
      subtitle: "For people curious, preparing, or processing — with clinical rigor and lived wisdom.",
      icon: Eye,
      retreats: [
        {
          name: "Preparation & Integration Intensive",
          desc: "Not a dosing retreat. Clinical education and preparation for psychedelic-assisted therapy.",
          fullDescription: "Not a dosing retreat. A clinical education and preparation retreat for people considering psychedelic-assisted therapy, or who've already had experiences (therapeutic, ceremonial, recreational) and need help making sense of what came up. Dan is IPI-certified in Ketamine-Assisted Psychotherapy and hosts a weekly integration group. Rob provides psychedelic integration therapy and harm reduction support. Jenna brings the medical and psychiatric lens — contraindications, drug interactions, what the research actually says, and how to evaluate providers. Z shares his transformative (and terrifying) plant medicine experience in Peru with radical honesty — what went right, what went wrong, and what he wishes he'd known. Mike provides coaching for the life restructuring that often follows psychedelic experiences — when insights challenge your career, your relationships, or your entire way of living, someone needs to help you figure out what to do with that.",
          team: [
            { name: "Dan", contribution: "IPI-certified KAP therapist, weekly integration group host, clinical applications expertise" },
            { name: "Jenna", contribution: "Medical and psychiatric lens, contraindications, drug interactions, research literacy, provider evaluation" },
            { name: "Mike", contribution: "Life restructuring coaching for post-psychedelic integration, practical action when insights disrupt your life" },
            { name: "Z", contribution: "Lived plant medicine experience in Peru, radical honesty about the process, peer perspective" },
            { name: "Rob", contribution: "Psychedelic integration therapy, harm reduction framework, clinical processing" }
          ]
        },
        {
          name: "The Science & Soul of Psychedelics",
          desc: "An educational retreat for professionals, clinicians, and curious individuals.",
          fullDescription: "An educational retreat for professionals, clinicians, and curious individuals who want to understand the psychedelic therapy landscape with nuance. Dan covers the clinical applications and emerging research. Jenna breaks down the neuropharmacology in accessible terms. Rob provides the integration and harm-reduction framework, plus the philosophical and spiritual dimensions from his decade studying theology and world religions. Mike facilitates discussion on how this emerging field intersects with career, purpose, and the professional identities of attendees — many of whom are considering incorporating psychedelic work into their own practices. Z offers the experiential perspective: what it's actually like from the other side, and why lived experience matters alongside clinical training. No substances involved — just rigorous, honest education from people who work in the field.",
          team: [
            { name: "Jenna", contribution: "Neuropharmacology, medical safety education, research interpretation for non-clinicians" },
            { name: "Mike", contribution: "Career and professional identity coaching for attendees, facilitated discussion on the field's future" },
            { name: "Z", contribution: "Experiential perspective, lived plant medicine narrative, why lived experience matters alongside training" },
            { name: "Rob", contribution: "Integration and harm-reduction framework, philosophical/spiritual dimensions, theology lens" },
            { name: "Dan", contribution: "Clinical applications, emerging research, KAP certification perspective" }
          ]
        },
        {
          name: "KAP Series: Ketamine-Assisted Psychotherapy (Where Legal)",
          desc: "Co-facilitated ketamine-assisted psychotherapy with medical oversight.",
          fullDescription: "For retreats held in jurisdictions where legal, Dan and Rob can co-facilitate ketamine-assisted psychotherapy with Jenna providing medical oversight and support. Preparation, dosing sessions, and integration woven together over multiple days. Mike provides coaching support for participants in the days between sessions, helping them ground insights into practical life applications. Z supports the integration process through emotional regulation practices and peer presence — someone in the room who's been through altered states and can normalize the experience. Small group format. This offering requires specific venue, licensing, and regulatory compliance — listed here as a potential offering for appropriate locations.",
          team: [
            { name: "Mike", contribution: "Between-session coaching, grounding insights into practical life applications" },
            { name: "Z", contribution: "Integration support, emotional regulation practices, peer presence, normalizing the experience" },
            { name: "Rob", contribution: "Co-facilitator, psychedelic integration therapy, clinical processing, harm reduction" },
            { name: "Dan", contribution: "Co-facilitator, IPI-certified KAP therapist, dosing session leadership, integration groups" },
            { name: "Jenna", contribution: "Medical oversight, vitals monitoring, contraindication screening, medication management" }
          ]
        },
        {
          name: "The Common Ground: Mystics, Medicine & The Near-Death Experience",
          desc: "Different doors. Same room. Exploring the convergence of mystical experiences.",
          fullDescription: "Teresa of Ávila described an interior castle of seven mansions leading to union with the divine. Rumi wrote about a field beyond ideas of wrongdoing and rightdoing. The Buddha described cessation of self and boundless awareness. People who've had near-death experiences report tunnels of light, encounters with a loving presence, and a dissolution of the boundary between self and everything else. People who've journeyed with psilocybin, ayahuasca, or ketamine describe ego dissolution, unity consciousness, encounters with entities, and a felt sense that everything is connected. Different doors. Same room. This retreat maps the overlapping phenomenology — not to prove anything, but to take seriously the possibility that these experiences point to something real about human consciousness and its relationship to what's larger. Rob leads the comparative framework, drawing on his decade studying theology and world religions — from Christian mysticism to Buddhist meditation to Islamic Sufism to Hindu non-duality — and positions the psychedelic experience within this broader tradition. Dan brings Frankl's noetic dimension — the spiritual core of the human person that logotherapy insists exists whether or not you practice religion — and his own Catholic formation as a lens for engaging the transcendent. Z speaks from lived experience with plant medicine ceremony in Peru, where the spiritual dimension wasn't theoretical — it was the point. His Inner Care practices offer a contemplative framework accessible to people from any tradition or none. Mike facilitates the grounding work: what do you do with an experience like this? How does it change how you live, lead, relate, and choose? Jenna provides the neuroscience — what's actually happening in the brain during mystical states, NDEs, and psychedelic experiences, and why the phenomenology converges across such different entry points.",
          team: [
            { name: "Rob", contribution: "Comparative theology and world religions, Christian mysticism to Buddhist meditation, decade of study" },
            { name: "Dan", contribution: "Frankl's noetic dimension, Catholic formation, logotherapy's spiritual core, transcendent engagement" },
            { name: "Z", contribution: "Lived plant medicine ceremony experience, Inner Care contemplative practices, accessible spiritual framework" },
            { name: "Mike", contribution: "Integration coaching, translating mystical experience into daily life, grounding and practical application" },
            { name: "Jenna", contribution: "Neuroscience of mystical states and NDEs, brain science of ego dissolution, convergent phenomenology" }
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Theme 9: Life Transitions & Reinvention",
      subtitle: "For people in the space between who they were and who they're becoming.",
      icon: ArrowRightLeft,
      retreats: [
        {
          name: "Career Reinvention Lab",
          desc: "Led by people who blew up their careers and started over.",
          fullDescription: "Three members of this team blew up their careers and started over — Rob left 20 years in corporate tech (IBM) for philosophy, theology, and eventually clinical social work at age 37. Mike went from trial law to life coaching and published authorship. Z walked away from software development after a mental health crisis and became a coach and author. This retreat is led by people who've actually done it, not people who theorize about it. Mike runs the coaching framework — clarity, vision, action planning. Rob provides the therapeutic depth for the fear, grief, and identity loss that career change carries. Dan offers the logotherapy lens on meaningful work — what Frankl called \"Sunday neurosis,\" the dread of going back to a job that has no meaning. Z shares the practical and emotional reality of betting on yourself when nobody else understands why. Jenna addresses the physical toll of career dissatisfaction — the insomnia, the weight gain, the chronic inflammation — and helps participants reclaim their health alongside their direction.",
          team: [
            { name: "Z", contribution: "Lived experience leaving software development, emotional reality of betting on yourself, peer authenticity" },
            { name: "Rob", contribution: "Therapeutic depth for transition fear/grief/identity loss, 20-year IBM career pivot story, clinical support" },
            { name: "Dan", contribution: "Logotherapy on meaningful work, \"Sunday neurosis,\" existential career framework" },
            { name: "Jenna", contribution: "Physical toll of career dissatisfaction, health reclamation alongside career change, wellness assessment" },
            { name: "Mike", contribution: "Coaching framework for reinvention, vision and action planning, lived career pivot experience" }
          ]
        },
        {
          name: "The Second Act",
          desc: "For people in midlife or beyond who sense they have more to give.",
          fullDescription: "For people in midlife (or beyond) who sense they have more to give but don't know what form it takes. Retirement, encore careers, legacy projects, creative pursuits, giving back. Mike specializes in this exact coaching niche — helping high-achievers at the crossroads find what's next. Dan's logotherapy framework addresses the existential dimension: what gives life meaning when the first act's goals have been met (or abandoned)? Rob provides clinical support for the depression, anxiety, and grief that often accompany major transitions. Jenna addresses the biological realities of aging, hormonal changes, and cognitive health — and how to optimize vitality for the next chapter. Z brings his \"Inner Care\" framework to help participants reconnect with inner knowing that gets buried under decades of obligation, and his work with clients approaching retirement who are seeking renewed purpose.",
          team: [
            { name: "Rob", contribution: "Clinical support for midlife depression/anxiety/grief, therapeutic processing of transitions" },
            { name: "Dan", contribution: "Logotherapy on meaning after achievement, existential second-act framework, group facilitation" },
            { name: "Jenna", contribution: "Biology of aging, hormonal changes, cognitive health, vitality optimization for the next chapter" },
            { name: "Mike", contribution: "Crossroads coaching specialty, high-achiever transition expertise, practical next-step planning" },
            { name: "Z", contribution: "Inner Care reconnection practices, working with pre-retirement and retirement clients, inner listening" }
          ]
        },
        {
          name: "Rebuilding After Loss",
          desc: "Divorce. Death. Job loss. Health crisis. Financial ruin.",
          fullDescription: "Divorce. Death. Job loss. Health crisis. Financial ruin. Sometimes life doesn't give you a choice about the transition — it just happens. This retreat is for people in the aftermath, trying to figure out how to go on. Mike speaks from personal experience with heartbreak, loss, and financial struggle — and brings coaching for the practical rebuilding that grief demands. Rob brings EMDR for trauma processing and clinical grief work. Dan provides the logotherapy framework for finding meaning in suffering — the core of Frankl's entire life's work. Jenna offers medical support for the physical toll grief takes — the immune suppression, the insomnia, the weight of it in the body. Z teaches daily practices for getting through when getting through feels impossible, and shares his own experience of reaching a breaking point and finding a way forward.",
          team: [
            { name: "Dan", contribution: "Logotherapy for meaning in suffering, Frankl's core framework, group meaning-making" },
            { name: "Jenna", contribution: "Medical support for grief's physical toll, immune and sleep support, body-based grief recovery" },
            { name: "Mike", contribution: "Lived experience with loss and rebuilding, coaching for practical life reconstruction" },
            { name: "Z", contribution: "Daily survival practices, lived experience with breaking point and recovery, emotional regulation" },
            { name: "Rob", contribution: "EMDR trauma processing, clinical grief work, somatic practices for embodied grief" }
          ]
        },
        {
          name: "Human in the Age of AI",
          desc: "For people whose sense of identity, purpose, and relevance is being rattled by artificial intelligence.",
          fullDescription: "This is not a tech conference. This is a retreat for people whose sense of identity, purpose, and relevance is being rattled by artificial intelligence — and who need more than a LinkedIn article to process it. Rob and Z both come from deep technology backgrounds (Rob spent 20 years at IBM, Z was a software developer) and understand the seduction and the existential weight of working inside systems that are now replacing the people who built them. Dan brings logotherapy's most urgent question to the table: what does meaning look like when machines can do what you used to do? Frankl's framework was built for exactly this kind of crisis — when external circumstances strip away the roles and skills that defined you, what remains? Mike coaches on career reinvention and identity rebuilding in a landscape that's shifting faster than anyone can plan for. Jenna addresses what chronic technological anxiety does to the body — the cortisol, the insomnia, the decision fatigue — and offers interventions to restore clarity and vitality. Z leads emotional regulation practices for the specific flavor of anxiety AI creates: the scrolling, the comparing, the feeling of falling behind.",
          team: [
            { name: "Z", contribution: "Former software developer perspective, AI-specific anxiety regulation, digital wellness practices" },
            { name: "Rob", contribution: "20-year IBM career, clinical processing of identity disruption, tech insider perspective" },
            { name: "Dan", contribution: "Logotherapy on meaning when roles disappear, Frankl's framework for existential crisis" },
            { name: "Mike", contribution: "Career reinvention coaching for an AI world, identity rebuilding, practical forward planning" },
            { name: "Jenna", contribution: "Biological impact of technological anxiety, cortisol and decision fatigue, clarity-restoring interventions" }
          ]
        },
        {
          name: "The Weight of Leadership",
          desc: "For people who carry the moral and emotional weight of decisions that affect others.",
          fullDescription: "For people who carry the moral and emotional weight of decisions that affect other people's lives — and who have nowhere to put it down. Executives, founders, attorneys, physicians, nonprofit leaders, military officers, school administrators — anyone who leads and lies awake wondering if they're doing it right. Mike leads from his background as a trial lawyer who navigated high-stakes decisions with real consequences, and his coaching work with leaders in transition. Rob brings clinical expertise in burnout, imposter syndrome, and the loneliness of authority — the things leaders can't talk about with their teams. Dan provides logotherapy's framework for responsible leadership — Frankl wrote extensively about the relationship between freedom and responsibility, and the ethical weight of choosing for others. Jenna addresses what chronic leadership stress does to the body: the cardiovascular strain, the hormonal disruption, the sleep deprivation that erodes judgment over time. Z brings practices for leaders who've forgotten how to feel — emotional regulation tools for people whose professional identity requires them to always be \"on.\"",
          team: [
            { name: "Mike", contribution: "Trial law background, leadership coaching, high-stakes decision-making experience, practical clarity" },
            { name: "Rob", contribution: "Clinical expertise in burnout and imposter syndrome, leadership loneliness, therapeutic support" },
            { name: "Dan", contribution: "Logotherapy on freedom and responsibility, ethical leadership, Frankl's framework for choosing for others" },
            { name: "Jenna", contribution: "Cardiovascular and hormonal impact of leadership stress, sleep and judgment, executive wellness" },
            { name: "Z", contribution: "Emotional regulation for people always \"on,\" reconnecting leaders with feeling, daily settling practices" }
          ]
        }
      ]
    },
    {
      id: 10,
      title: "Theme 10: Mind, Body & Spirit",
      subtitle: "For people who know healing isn't just cognitive — it lives in the body and the soul.",
      icon: TreePine,
      retreats: [
        {
          name: "The Whole Person Reset",
          desc: "A retreat that treats the human being as one integrated system.",
          fullDescription: "A retreat that treats the human being as one integrated system, not a collection of symptoms. Jenna leads the medical and nutritional dimension — comprehensive wellness assessment, lab interpretation, supplement protocols, chronotherapy, lifestyle medicine. Rob leads the psychological and somatic dimension — EMDR, IFS, mindfulness, and nervous system regulation. Dan leads the spiritual and existential dimension — meaning, purpose, values, and the questions that won't go away. Z leads daily emotional regulation and self-expression practices, and facilitates the connective tissue between sessions — helping participants integrate what they're learning across dimensions. Mike facilitates the integration into daily life: how do you take all of this home and actually live it? His coaching methodology ensures that the whole-person reset doesn't evaporate on the flight home.",
          team: [
            { name: "Jenna", contribution: "Medical and nutritional leadership, wellness assessment, supplements, chronotherapy, lifestyle medicine" },
            { name: "Mike", contribution: "Integration coaching, translating retreat experience into sustainable daily practice, action planning" },
            { name: "Z", contribution: "Emotional regulation and self-expression practices, between-session integration, connective facilitation" },
            { name: "Rob", contribution: "Psychological and somatic leadership, EMDR/IFS/mindfulness, nervous system regulation" },
            { name: "Dan", contribution: "Spiritual and existential leadership, meaning/purpose/values, noetic dimension" }
          ]
        },
        {
          name: "Meditation, Meaning & The Inner Life",
          desc: "For people drawn to contemplative practice but wanting more depth.",
          fullDescription: "For people drawn to contemplative practice but wanting more depth than a wellness spa offers. Rob brings years of Transcendental Meditation practice and Reiki training alongside clinical depth. Dan brings logotherapy's \"noetic dimension\" — Frankl's term for the spiritual core of the human person. Z leads guided meditation and inner awareness practices from his \"Inner Care\" framework — making contemplative work accessible for people who've never meditated and deepening it for those who have. Mike facilitates reflection on how contemplative practice connects to purpose and daily life — not as an escape from the world, but as preparation for re-engaging it. Jenna provides education on what meditation and breathwork actually do to the brain and body — the science behind the experience — and helps participants build a sustainable wellness practice.",
          team: [
            { name: "Mike", contribution: "Connecting contemplation to purpose and daily life, reflection facilitation, practical integration" },
            { name: "Z", contribution: "Guided meditation, Inner Care framework, accessible contemplative practices, inner awareness" },
            { name: "Rob", contribution: "Transcendental Meditation, Reiki, clinical depth, contemplative practice leadership" },
            { name: "Dan", contribution: "Logotherapy's noetic dimension, Frankl's spiritual core, meaning through contemplation" },
            { name: "Jenna", contribution: "Neuroscience of meditation and breathwork, building sustainable wellness practice, biological education" }
          ]
        },
        {
          name: "Movement, Nature & Nervous System",
          desc: "Costa Rica is the setting — use it.",
          fullDescription: "Costa Rica is the setting — use it. Hiking, swimming, breathwork, yoga, cold water immersion, and silence in nature, paired with evening processing groups. Rob leads the nervous system education and somatic practices. Jenna provides the physiological framework — what movement, cold exposure, and nature actually do to cortisol, inflammation, and neuroplasticity. Z facilitates morning movement and vocal/self-expression practices — using the body and voice to access what words can't reach. Dan leads evening meaning-making reflection, grounding the day's physical experience in larger questions of purpose and presence. Mike brings the energy and motivation — physical challenge, group accountability, and coaching on how to maintain an active, embodied life after the retreat ends. The body leads, the mind follows.",
          team: [
            { name: "Z", contribution: "Morning movement and vocal practices, self-expression through the body, experiential leadership" },
            { name: "Rob", contribution: "Nervous system education, somatic practices, clinical holding for what movement surfaces" },
            { name: "Dan", contribution: "Evening meaning-making reflection, grounding physical experience in existential purpose" },
            { name: "Jenna", contribution: "Exercise physiology, cold exposure science, cortisol/inflammation/neuroplasticity education" },
            { name: "Mike", contribution: "Physical challenge facilitation, group energy and motivation, post-retreat sustainability coaching" }
          ]
        },
        {
          name: "When Your Body Is Talking",
          desc: "For people whose bodies have been sending signals for years.",
          fullDescription: "For people whose bodies have been sending signals for years — chronic fatigue, autoimmune flares, gut problems, hormonal chaos, unexplained pain, brain fog — and who are ready to listen. This is a body-first healing retreat where medicine leads. Jenna runs the core process: comprehensive functional wellness assessment, lab interpretation, nutritional protocols, supplement planning, chronotherapy, lifestyle medicine, and education about what's actually happening in your body. She creates individualized take-home plans that address the specific biological patterns keeping each participant stuck. Rob brings the psychological dimension — because chronic illness lives in a feedback loop with trauma, stress, and emotional patterns. EMDR and IFS help process the grief, frustration, and identity disruption that come with being sick when nobody can tell you why. Dan provides the meaning-making framework: how do you find purpose when your body has become the obstacle? Logotherapy's attitudinal values — the meaning found in how you face unavoidable suffering — are directly relevant. Mike coaches on rebuilding a life around chronic conditions: practical strategies for work, relationships, and goals when your energy is limited and unpredictable. Z leads gentle emotional regulation and self-expression practices adapted for people in physical pain or fatigue — because the standard \"push through it\" approach is exactly what got many of these participants here.",
          team: [
            { name: "Jenna", contribution: "Functional wellness assessment, lab interpretation, nutritional protocols, lifestyle medicine, individualized plans" },
            { name: "Rob", contribution: "Trauma-illness feedback loop, EMDR/IFS for chronic illness grief, psychological dimension of physical symptoms" },
            { name: "Dan", contribution: "Meaning-making in unavoidable suffering, logotherapy's attitudinal values, purpose when the body limits you" },
            { name: "Mike", contribution: "Practical life rebuilding around chronic conditions, energy management coaching, sustainable goal-setting" },
            { name: "Z", contribution: "Gentle emotional regulation for people in pain, adapted self-expression practices, daily inner care for limited energy" }
          ]
        },
        {
          name: "The Body Keeps the Score: Understanding Trauma From the Inside Out",
          desc: "You've read the book. Now experience the modalities firsthand.",
          fullDescription: "You've read the book — or at least you've heard the title enough times to know that trauma lives in the body, not just the mind. But knowing that intellectually and experiencing it are two different things. This retreat bridges the gap. It's part psychoeducation, part experiential immersion: participants learn the science (van der Kolk's research on trauma and the body, Porges' polyvagal theory, Peter Levine's somatic experiencing framework) and then experience the modalities firsthand. Rob leads EMDR demonstrations and IFS parts work — both directly descended from the research participants are studying — and provides the clinical anchoring for participants who may access difficult material during experiential sessions. Jenna teaches the neurobiology: what's actually happening in your nervous system when you're triggered, why your body responds the way it does, and what interventions (nutritional, medical, lifestyle) support nervous system regulation from the biological side. Z leads somatic practices — breathwork, movement, body scanning, emotional release exercises — drawing from his own journey of reconnecting with a body he'd been dissociated from during years of depression. Dan provides the meaning-making framework for understanding why your body held what it held, and how to integrate that understanding into a coherent life narrative — because the goal isn't just to release trauma, it's to make sense of it. Mike coaches on the practical \"now what\" — how to build daily practices, environmental changes, and lifestyle structures that support ongoing nervous system health after the retreat ends.",
          team: [
            { name: "Rob", contribution: "EMDR and IFS demonstrations, clinical trauma processing, somatic grounding, safety anchoring" },
            { name: "Jenna", contribution: "Neurobiology of trauma (polyvagal, nervous system education), biological interventions, nutritional nervous system support" },
            { name: "Z", contribution: "Somatic practices, breathwork, body reconnection, lived experience with dissociation and embodiment" },
            { name: "Dan", contribution: "Meaning-making for trauma integration, logotherapy framework for coherent life narrative, group holding" },
            { name: "Mike", contribution: "Post-retreat practice building, lifestyle and environment coaching, sustainable daily nervous system care" }
          ]
        }
      ]
    },
    {
      id: 11,
      title: "Theme 11: Young Adults & Launching",
      subtitle: "For 18-30 year olds stuck between potential and paralysis — and the families who love them.",
      icon: Rocket,
      retreats: [
        {
          name: "The Launchpad",
          desc: "For young adults aged 18-28 struggling to launch into independent life.",
          fullDescription: "Dan has written extensively about \"The Young Man in the Basement\" — young adults (especially young men) who are stuck in avoidance, gaming, isolation, and fear of failure. This retreat is designed specifically for young adults aged 18-28 who are struggling to launch into independent life. Dan leads with clinical expertise and logotherapy's action-oriented framework (motivation follows action, not the other way around). Z connects as a peer — closer in age and cultural experience, he speaks the language of anxiety, masking, and the pressure to perform in a social media world, and shares his own journey from stuck software developer to purposeful coach and author. Rob provides the clinical and family systems lens, working with participants whose stuckness has roots in trauma, attachment, or family dynamics. Mike coaches on practical goal-setting, vision, and the mechanics of building a life — the stuff nobody teaches you. Jenna addresses the biological factors (sleep, nutrition, screen time, substances, ADHD) that keep young adults stuck, and provides medical perspective that young adults rarely get in an accessible, non-judgmental format.",
          team: [
            { name: "Rob", contribution: "Clinical and family systems lens, trauma/attachment roots of stuckness, therapeutic processing" },
            { name: "Dan", contribution: "\"Young Man in the Basement\" expertise, logotherapy action framework, developmental clinical work" },
            { name: "Jenna", contribution: "Sleep/nutrition/screen time/substance/ADHD biological factors, accessible medical perspective" },
            { name: "Mike", contribution: "Practical goal-setting and vision coaching, life-building mechanics, accountability structure" },
            { name: "Z", contribution: "Peer connection, lived experience with anxiety and career paralysis, social media generation fluency" }
          ]
        },
        {
          name: "Parent & Young Adult Intensive",
          desc: "For families where the young adult is struggling and parents are caught between helping and enabling.",
          fullDescription: "For families where the young adult is struggling and the parents are caught between helping and enabling. Dan brings decades of family work with exactly this dynamic. Rob adds structural family therapy and attachment science. The retreat works with parents and young adults both separately and together — because the system has to shift, not just the kid. Mike coaches parents on their own identity transition (who are you when your child won't launch?) and works with young adults on vision and goal-setting. Jenna provides family-accessible education on mental health, medication, and the biological factors everyone in the room needs to understand. Z connects with the young adults in a way that clinical professionals sometimes can't — as someone who's been in that stuck place and found his way out.",
          team: [
            { name: "Dan", contribution: "Decades of family and young adult clinical expertise, logotherapy, developmental lens" },
            { name: "Jenna", contribution: "Mental health and medication education for families, biological factor awareness, medical accessibility" },
            { name: "Mike", contribution: "Parent identity coaching, young adult vision and goal-setting, family transition support" },
            { name: "Z", contribution: "Peer connection with young adults, lived experience with stuckness, bridging the generational gap" },
            { name: "Rob", contribution: "Structural family therapy, attachment science, clinical work with the family system" }
          ]
        },
        {
          name: "Digital Natives: Reclaiming Your Mind",
          desc: "For people whose relationship with technology has become a source of anxiety and disconnection.",
          fullDescription: "For young adults (and not-so-young adults) whose relationship with technology has become a source of anxiety, distraction, and disconnection. Z, a former software developer, and Rob, who spent 20 years in corporate tech, both understand the pull of digital life from the inside. This retreat combines digital detox with emotional regulation skills, identity work, and community building. Jenna addresses the neurobiological impact of screen time and social media — dopamine, attention, sleep disruption — in concrete, science-based terms. Dan provides the existential perspective on meaning in a distracted age, drawing on logotherapy's challenge: you cannot find meaning passively scrolling. Mike coaches participants on designing a life that's compelling enough to compete with the screen — building real-world purpose, connection, and momentum.",
          team: [
            { name: "Jenna", contribution: "Neurobiology of screen time, dopamine and attention science, sleep disruption education" },
            { name: "Mike", contribution: "Life design coaching, building real-world purpose and momentum, competing with the screen" },
            { name: "Z", contribution: "Former software developer perspective, emotional regulation skills, digital detox facilitation" },
            { name: "Rob", contribution: "20-year tech career insider perspective, clinical support, somatic and mindfulness practices" },
            { name: "Dan", contribution: "Existential perspective on meaning in a distracted age, logotherapy's challenge to passive consumption" }
          ]
        }
      ]
    },
    {
      id: 12,
      title: "Theme 12: Death, Grief & What Remains",
      subtitle: "For people facing mortality — their own or someone else's — who want to do it with intention.",
      icon: Hourglass,
      retreats: [
        {
          name: "The Mortality Retreat",
          desc: "Not morbid. Sacred.",
          fullDescription: "Not morbid. Sacred. For people facing a terminal diagnosis, caring for someone who is dying, or simply reckoning with the fact that life is finite and they want to live accordingly. Dan's entire clinical framework — logotherapy — was born in the concentration camps. Frankl's central insight: even in the face of death, meaning is possible. Rob brings clinical expertise in grief, loss, and end-of-life therapy, plus his decade studying theology and world religions — traditions that have been sitting with mortality for thousands of years. Jenna provides the medical perspective for those managing illness alongside emotional work, and helps families understand what's happening in the body with compassion and clarity. Mike helps participants think about legacy — not just what you leave behind, but how you live right now, with the time you have. Z leads daily inner care practices for staying present with fear, grief, and uncertainty rather than numbing or fleeing — the hardest emotional regulation work there is.",
          team: [
            { name: "Mike", contribution: "Legacy and life review work, living fully with the time remaining, practical values-based planning" },
            { name: "Z", contribution: "Inner Care practices for fear and uncertainty, staying present with mortality, daily emotional grounding" },
            { name: "Rob", contribution: "Clinical grief and end-of-life therapy, theology and world religions lens, clinical holding" },
            { name: "Dan", contribution: "Logotherapy born in the camps, meaning in the face of death, Frankl's core framework" },
            { name: "Jenna", contribution: "Medical perspective on illness and dying, compassionate body education, family medical support" }
          ]
        },
        {
          name: "Grief That Won't Resolve",
          desc: "For people stuck in grief — months, years, decades after a loss.",
          fullDescription: "For people stuck in grief — months, years, decades after a loss. The kind of grief that doesn't follow the stages, doesn't get better with time, and doesn't respond to \"have you tried journaling?\" Rob leads with EMDR (specifically effective for stuck grief and trauma) and clinical grief work. Dan provides the logotherapy framework for carrying grief forward without being consumed by it — Frankl's own life was defined by catastrophic loss, and his framework was built to hold it. Jenna addresses the physical manifestations of chronic grief — the fatigue, the immune suppression, the body keeping score — and provides medical and nutritional support for bodies that have been grieving for years. Mike brings coaching for the life that needs to be rebuilt around the loss — because grief doesn't stop the need to work, parent, and make decisions. Z teaches daily practices for being with grief without being swallowed by it, and facilitates group connection that normalizes the experience of grief that won't fit into a timeline.",
          team: [
            { name: "Z", contribution: "Daily grief practices, group grief normalization, emotional regulation for waves of loss" },
            { name: "Rob", contribution: "EMDR for stuck grief, clinical grief processing, somatic grief work" },
            { name: "Dan", contribution: "Logotherapy for carrying grief forward, Frankl's framework born from loss, meaning-making" },
            { name: "Jenna", contribution: "Physical manifestations of chronic grief, immune/sleep/fatigue support, long-term body recovery" },
            { name: "Mike", contribution: "Life rebuilding coaching alongside grief, practical decision support, forward momentum" }
          ]
        },
        {
          name: "A Good Death: Planning, Presence & Legacy",
          desc: "For people who want to approach end-of-life planning with more than a checklist.",
          fullDescription: "For people who want to approach end-of-life planning with more than a checklist. Advance directives, yes — but also: what do you want to say? What do you want to feel? What do you want your people to know? Mike leads the practical legacy and life review work — what you've built, what you want to pass on, how you want to be remembered. Dan provides the existential and spiritual framework — logotherapy's ultimate question is how to face the end with dignity and meaning. Rob offers clinical support for the emotions this work surfaces, and draws on his theological training to hold space for spiritual questions without imposing answers. Jenna helps participants address the medical planning dimensions — advance directives, palliative care options, what to expect — with compassion and medical literacy. Z leads practices for staying present with the enormity of what's being faced, and helps participants find ways to express what matters most to the people they love.",
          team: [
            { name: "Dan", contribution: "Logotherapy on facing the end with dignity and meaning, existential framework" },
            { name: "Jenna", contribution: "Medical planning education, advance directives, palliative care, compassionate medical literacy" },
            { name: "Mike", contribution: "Legacy and life review leadership, practical values transmission, how to be remembered" },
            { name: "Z", contribution: "Presence practices for facing enormity, self-expression for final communications, emotional grounding" },
            { name: "Rob", contribution: "Clinical emotional support, theological and spiritual holding, grief processing" }
          ]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#f5f3ef] text-gray-800 overflow-x-hidden" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');`}</style>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#2d6a6a] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#245757] ${
          showBackToTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* 4-Tile Image Header */}
      <section className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          <div className="aspect-video md:aspect-square overflow-hidden border border-black">
            <img src="/team/buddha.jpg" alt="Buddha statue" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-video md:aspect-square overflow-hidden border border-black">
            <img src="/team/dining_ocean.jpg" alt="Ocean dining" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-video md:aspect-square overflow-hidden border border-black">
            <img src="/team/frmr_mal.jpg" alt="Maloca" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-video md:aspect-square overflow-hidden border border-black">
            <img src="/team/ram_das.jpg" alt="Ram Dass quote" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Header Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#2d6a6a] to-[#1a4a4a]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4">Internal Document — Team Brainstorming</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Reunion Costa Rica Brainstorming for This April and Beyond</h1>
          <p className="text-2xl text-gray-200 italic">The possibilities are endless ...</p>
          <div className="bg-black rounded-lg px-6 py-5 mx-auto max-w-3xl mt-8">
            <p className="text-[#ff6b6b] font-bold text-center text-lg md:text-xl">CONTENT IS AI GENERATED - AND SO THE MORE INFO OUT THERE ON YOU IN THE AI WORLD, THE MORE YOU SHOW UP HERE - APOLOGIES - WANTED TO GET A MOCK UP OUT THERE ASAP - BUT I AM ACKNOWLEDGING THAT IT IS NOT IN BALANCE. 🙏</p>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d6a6a] mb-4 text-center">The Team for April</h2>
          <p className="text-xl md:text-2xl text-gray-800 text-center mb-8 font-bold">Dan Franz · Jenna Kuru · Mike Martone · Rob Romano · Zhi Wei Zheng ("Z")</p>

          <div className="bg-[#2d6a6a] p-8 rounded-lg mb-6 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-4">To the Team:</h3>
            <div className="space-y-4 leading-relaxed text-lg md:text-xl">
              <p>Nothing in life is wasted. Not the detours, the doubt, the breaking open — none of it. There is nothing Source, God, the Universe has allowed us to experience that won't be used to help someone else find their way through. And now we get to pay it forward in a different space!</p>
              <p>Each of us arrived here through a different door — different training, different wounds, different ways to heal — yet discovering a common Truth.</p>
              <p>That's not an accident. The person who needs to hear it the way Dan says it won't hear it the way Jenna says it. The person Rob reaches, Mike reaches differently. The person Z connects with may never have found their way to any of the rest of us. We don't overlap. We complement.</p>
              <p className="font-semibold text-amber-300">Five voices. One Source. Endless connection. Let's go!</p>
            </div>
          </div>

          <div className="bg-amber-300 p-8 rounded-lg">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">What Makes This Team Rare:</h3>
            <p className="text-gray-800 leading-relaxed text-lg md:text-xl">
              Licensed clinicians with combined 37+ years of practice. A board-certified psychiatric nurse practitioner who bridges medicine, nutrition, and psychotherapy. A trial lawyer turned certified life coach and published author. A former software developer turned mental health coach and published author who healed through plant medicine and now teaches emotional regulation and inner care. Three members pivoted from corporate/professional careers into healing work. Three are published authors. Two have deep expertise in addiction. Three bring psychedelic experience (clinical, facilitation, and lived). The group spans from neuroscience to logotherapy to somatic work to dream-building to inner care — and every member knows what it means to rebuild a life from the inside out.
            </p>
          </div>
        </div>
      </section>

      {/* Retreat Catalog Header */}
      <section className="py-12 px-6 bg-[#2d6a6a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Retreat Brainstorming Ideas</h2>
          <p className="text-xl text-gray-200">49 retreat concepts across 12 themes</p>
          <div className="mt-6 inline-block bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
            <p className="text-white font-medium flex items-center justify-center gap-2">
              <Plus className="w-4 h-4" />
              <span>Click any theme to expand, then click a retreat title to see full details</span>
            </p>
          </div>
        </div>
      </section>

      {/* Themes Accordion */}
      <section className="py-12 px-6 bg-[#f5f3ef]">
        <div className="max-w-4xl mx-auto space-y-4">
          {themes.map((theme) => {
            const IconComponent = theme.icon
            return (
              <div key={theme.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => {
                    setOpenTheme(openTheme === theme.id ? null : theme.id)
                    if (openTheme !== theme.id) {
                      setOpenRetreat(null)
                    }
                  }}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#f0f7f7] transition-colors cursor-pointer"
                  title={openTheme === theme.id ? "Click to collapse" : "Click to expand retreats"}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#2d6a6a]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-[#2d6a6a]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 underline decoration-[#2d6a6a]/30 underline-offset-2">{theme.title}</h3>
                      <p className="text-base text-gray-600 italic">{theme.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-sm text-[#2d6a6a] hidden sm:inline">{openTheme === theme.id ? 'Collapse' : 'Expand'}</span>
                    {openTheme === theme.id ? (
                      <Minus className="w-5 h-5 text-[#2d6a6a]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#2d6a6a]" />
                    )}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openTheme === theme.id ? 'max-h-[20000px]' : 'max-h-0'}`}>
                  <div className="px-6 pb-6 space-y-3">
                    {theme.retreats.map((retreat, idx) => {
                      const retreatKey = `${theme.id}-${idx}`
                      const isOpen = openRetreat === retreatKey
                      return (
                        <div key={idx} className={`rounded-lg overflow-hidden transition-colors ${isOpen ? 'bg-[#e8e6e1]' : 'bg-[#f5f3ef] hover:bg-[#eae8e3]'}`}>
                          <button
                            onClick={() => setOpenRetreat(isOpen ? null : retreatKey)}
                            className="w-full p-4 text-left flex items-center justify-between cursor-pointer"
                            title={isOpen ? "Click to collapse" : "Click to see full description and team roles"}
                          >
                            <div>
                              <h4 className="font-semibold text-[#2d6a6a] underline decoration-[#2d6a6a]/40 underline-offset-2 hover:decoration-[#2d6a6a]">{retreat.name}</h4>
                              <p className="text-gray-600 text-base mt-1">{retreat.desc}</p>
                              {!isOpen && (
                                <p className="text-[#2d6a6a] text-sm mt-2 font-medium">Click to view details →</p>
                              )}
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                              <span className="text-sm text-[#2d6a6a]">{isOpen ? 'Collapse' : 'Expand for More Info'}</span>
                              {isOpen ? (
                                <Minus className="w-4 h-4 text-[#2d6a6a]" />
                              ) : (
                                <Plus className="w-4 h-4 text-[#2d6a6a]" />
                              )}
                            </div>
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[5000px]' : 'max-h-0'}`}>
                            <div className="px-4 pb-4 pt-2 border-t border-gray-200">
                              <p className="text-gray-700 text-lg font-medium leading-relaxed mb-4">
                                {retreat.fullDescription}
                              </p>
                              <div className={`p-4 rounded-lg ${
                                idx % 3 === 0
                                  ? 'bg-[#2d6a6a]'
                                  : idx % 3 === 1
                                    ? 'bg-[#4a6fa5]'
                                    : 'bg-amber-300'
                              }`}>
                                <h5 className={`font-bold mb-3 text-lg ${
                                  idx % 3 === 2 ? 'text-gray-900' : 'text-white'
                                }`}>How We All Show Up:</h5>
                                <ul className="space-y-2">
                                  {retreat.team.map((member, mIdx) => (
                                    <li key={mIdx} className="text-lg">
                                      <span className={`font-bold ${
                                        idx % 3 === 2 ? 'text-gray-900' : 'text-amber-300'
                                      }`}>{member.name}:</span>{' '}
                                      <span className={`font-medium ${
                                        idx % 3 === 2 ? 'text-gray-800' : 'text-white'
                                      }`}>{member.contribution}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* How We Work Together */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#2d6a6a] mb-8 text-center">How We Work Together</h2>
          <div className="bg-[#2d6a6a] p-8 rounded-lg text-white">
            <div className="space-y-4 leading-relaxed text-lg md:text-xl">
              <p>Five people who actualize and manifest their healing gifts through different paths and lived experiences, together creating a co-creative, collaborative space to help others heal and be more profoundly connected within themselves and with Source.</p>
              <p>We trust in our own alignment of body, mind, and spirit as the Universe has revealed it to us at this moment in time. We have faith that what will be, will be. It's exciting to ponder where the path ahead may lead us!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Image Bar */}
      <section className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          <div className="aspect-video md:aspect-square overflow-hidden border border-black">
            <img src="/team/ram_das.jpg" alt="We're all just walking each other home" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-video md:aspect-square overflow-hidden border border-black">
            <img src="/team/frmr_mal.jpg" alt="Maloca" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-video md:aspect-square overflow-hidden border border-black">
            <img src="/team/dining_ocean.jpg" alt="Ocean dining" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="aspect-video md:aspect-square overflow-hidden border border-black">
            <img src="/team/buddha.jpg" alt="Buddha statue" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-center">
        <p className="text-amber-400 font-bold mb-2">INTERNAL DOCUMENT — NOT FOR DISTRIBUTION</p>
        <p className="text-gray-400 text-sm">Prepared for team discussion. February 2026.</p>
        <p className="text-gray-500 text-xs mt-4">Reunion Wellness Resort & Retreats · Costa Rica</p>
      </footer>
    </div>
  )
}
